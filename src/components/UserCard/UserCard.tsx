import React, { useReducer } from 'react'
import './UserCard.css'
import type { User } from '../../contexts/UserContext';

interface UserCard {
  name: string;
  score: number;
  role: string;
}

type Props = {
  userCard: UserCard;
  handleWinAll: () => void;
}

type UserAction = 'Win' | 'Lose' | 'Winx2' | 'Losex2' | 'WinAll';

  function scoreReducer(score: number, action: UserAction) {
    switch (action) {
      case 'Win':
        return score + 1;
      case 'Lose':
        return score - 1;
      case 'Winx2':
        return score + 2;
      case 'Losex2':
        return score - 2;
      case 'WinAll':
        return score + 10;
      default:
        return score;
    }
  }

const UserCard = React.memo(({ userCard, handleWinAll }: Props) => {
  console.log("Render")
  const [score, dispatch] = useReducer(scoreReducer, 0)

  return (
    <div className='active-player-container'>
      <div className='player-card'>
        <div className='player-info'>
          <div className='player'>
            <span className='player-name'>{userCard.name}</span>
            <span className='player-role'>{userCard.role}</span>
          </div>
          <span className="player-score">{score}</span>
        </div>
        <div className='button-action'>
          <button className='btn-action btn-win' onClick={() => dispatch("Win")}>Win</button>
          <button className='btn-action btn-lose' onClick={() => dispatch("Lose")}>Lose</button>
          <button className='btn-action btn-wx2' onClick={() => dispatch("Winx2")}>Wx2</button>
          <button className='btn-action btn-lx2' onClick={() => dispatch("Losex2")}>Lx2</button>
          <button className='btn-action btn-win-all' onClick={handleWinAll}>Win All</button>
        </div>
        <input className='status-checkbox' type="checkbox" name="status" id="" />
      </div>
    </div>
  )
})

export default UserCard