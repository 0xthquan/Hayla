import React, { useReducer } from 'react'
import './UserCard.css'
import type { User } from '../../contexts/UserContext';

type Props = {
  userCard: User;
  handleWinAll: (player: User, action: UserAction) => void;
}

export type UserAction = 'Win' | 'Lose' | 'Winx2' | 'Losex2' | 'WinAll';

function scoreReducer(player: User, action: UserAction) {
  console.log(`Player "${player.name}" (id: ${player.id}) clicked: ${action}`)
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

const PlayerCard = React.memo(({ userCard, handleWinAll }: Props) => {
  console.log("Render")
  const [player, dispatch] = useReducer(scoreReducer, userCard)

  return (
    <div className='active-player-container'>
      <div className='player-card'>
        <div className='player-info'>
          <div className='player'>
            <span className='player-name'>{userCard.name}</span>
            <span className='player-role'>{userCard.role}</span>
          </div>
          <span className="player-score">{userCard.score}</span>
        </div>
        <div className='button-action'>
          {false && <button className='btn-action btn-win' onClick={() => dispatch("Win")}>Win</button>}
          {false && <button className='btn-action btn-lose' onClick={() => dispatch("Lose")}>Lose</button>}
          {false && <button className='btn-action btn-wx2' onClick={() => dispatch("Winx2")}>Wx2</button>}
          {false && <button className='btn-action btn-lx2' onClick={() => dispatch("Losex2")}>Lx2</button>}
          <button className='btn-action btn-win-all' onClick={() => dispatch("Win")}>Take All</button>
        </div>
        <input className='status-checkbox' type="checkbox" name="status" id="" />
      </div>
    </div>
  )
})

export default PlayerCard