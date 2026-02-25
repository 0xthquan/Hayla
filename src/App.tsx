import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UserCard from './components/UserCard/UserCard'
import GameSettings from './components/GameSettings/GameSettings';
import { UserContext, type User } from './contexts/UserContext';
import { id } from 'zod/locales';

function App() {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [user, setUser] = useState<User[]>([]);

  const handleWinAll = useCallback(() => {
    console.log("Take all")
  }, [])

  const addPlayer = useCallback(() => {
  }, [])

  const sortedPlayers = useMemo(() => {
    return [...user].sort((a, b) => b.score - a.score);
  }, [user])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://my-json-server.typicode.com/0xthquan/HALA/players');
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [])

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Navbar onOpenSetting={() => setIsOpenSettings(true)} />
        {sortedPlayers.map((user) => (
          <UserCard key={user.id} userCard={user} handleWinAll={handleWinAll} />
        ))}
        {isOpenSettings && <GameSettings closeGameSetting={() => setIsOpenSettings(false)} />}
      </UserContext.Provider>
    </>
  )
}

export default App
