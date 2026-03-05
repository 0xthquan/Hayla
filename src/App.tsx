import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PlayerCard, { type UserAction } from './components/UserCard/UserCard'
import GameSettings from './components/GameSettings/GameSettings';
import { UserContext, type User } from './contexts/UserContext';

function App() {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [user, setUser] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'scoreDesc' | 'scoreAsc' | ''>('');
  const [filterBy, setFilterBy] = useState<'winner' | 'loser' | ''>('')
  const handleWinAll = useCallback(() => {
    console.log("Take all")
  }, [])

  const userRef = useRef<User[]>([])

  const addPlayer = useCallback(() => {
  }, [])

  const sortedPlayers = useMemo(() => {
    const players = [...user];

    switch (sortBy) {
      case 'name':
        return players.sort((a, b) => a.name.localeCompare(b.name));
      case 'scoreAsc':
        return players.sort((a, b) => a.score - b.score);
      case 'scoreDesc':
      default:
        return players;
    }
  }, [user, sortBy])

  const displayedPlayers = useMemo(() => {
    switch (filterBy) {
      case 'winner':
        return sortedPlayers.filter((player) => player.score > 0);
      case 'loser':
        return sortedPlayers.filter((player) => player.score < 0);
      default:
        return sortedPlayers;
    }
  }, [sortedPlayers, filterBy])

  const searchPlayers = (input: string) => {
    if (input.trim() === "") {
      setUser(userRef.current)
    } else {
      setUser(userRef.current.filter((u) => u.name.includes(input)))
    }
  }

  const calculatorScore = (player: User) => {
    const players: User[] = []
    displayedPlayers.forEach(element => {
      if (element.id === player.id) {
        players.push({...element, score: element.score + 5})
      } else {
        players.push({...element, score: element.score - 1})
      }
    });

    setUser(players)
  }

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://my-json-server.typicode.com/0xthquan/Hayla/players');
      const allUser: User[] = await response.json();
      userRef.current = allUser
      setUser(allUser);
    };
    fetchUser();
  }, [])

  const handlePlayerClick = (player: User, action: UserAction) => {

  }

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Navbar
          onOpenSetting={() => setIsOpenSettings(true)}
          onSearch={searchPlayers}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterBy={filterBy}
          onFilterChange={setFilterBy}
        />
        {displayedPlayers.map((user) => (
          <PlayerCard key={user.id} userCard={user} handleWinAll={calculatorScore} />
        ))}
        {isOpenSettings && <GameSettings closeGameSetting={() => setIsOpenSettings(false)} />}
      </UserContext.Provider>
    </>
  )
}

export default App
