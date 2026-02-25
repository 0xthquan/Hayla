import React, { useContext, useRef } from 'react'
import './GameSettings.css'
import { UserContext } from '../../contexts/UserContext';


const GameSettings = ({ closeGameSetting }: { closeGameSetting: () => void }) => {
    const betAmountRef = useRef<HTMLInputElement>(null);
    const playerNameRef = useRef<HTMLInputElement>(null);
    const [user, setUser] = useContext(UserContext)

    const handleAddPlayer = () => {
        console.log(playerNameRef.current?.value);
    }

    return (
        <div>
            <div className='game-setting-background'>
                <div className='game-setting-container'>
                    <div className='game-setting-header'>
                        <h2>Game Setting</h2>
                        <button onClick={closeGameSetting}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
                    </div>
                    <div className='bet-amount-container'>
                        <span>Bet Amount (k)</span>
                        <div className='bet-amount-btn-container'>
                            <button className='btn-amount'>1</button>
                            <button className='btn-amount'>5</button>
                            <button className='btn-amount'>10</button>
                            <button className='btn-amount'>50</button>
                            <button className='btn-amount'>100</button>
                        </div>
                        <div className='custom-bet-container'>
                            <span>Custom:</span>
                            <input type="number" name="custom-bet" id="" ref={betAmountRef} />
                        </div>
                    </div>
                    <hr style={{ color: '#334155', marginBottom: '1rem' }} />
                    <div>
                        <span></span>
                        <form action="" className='add-player' onSubmit={(e) => { e.preventDefault(); handleAddPlayer(); }}>
                            <input type="text" name="player-name" id="" placeholder='Player Name' ref={playerNameRef} />
                            <button className='btn-add-player'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
                        </form>
                    </div>
                    {
                        user.map((player) => (
                            <div className='list-player-container'>
                                <div className='player-active'>
                                    <span>{player.name}</span>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-minus" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default GameSettings