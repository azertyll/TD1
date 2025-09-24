import { useState } from 'react'
import Button from '../ui/Button'

export default function Compteur() {


    const [playerName, setPlayerName] = useState("")
    const [count, setCount] = useState(0)

    const alertPlayerName = () => {
        alert(`Félicitations ${playerName}, votre score est de ${count}`)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>{count === 10 ? "BOOM" : ""}</h1>
            <form onSubmit={alertPlayerName}>
                <label htmlFor="playerName">Entrez votre Nom</label>
                <div>
                    <input type="text" name="playerName" id="playerName"
                        value={playerName}
                        onChange={(e) => { setPlayerName(e.target.value) }}
                    />

                    <button type='submit'>ok</button>
                </div>

            </form>

            <div style={{ display: 'flex' }}>
                <Button action={() => { setCount(count - 1) }} text={'  -  '} />
                <h1 style={{ color: 'white', padding: '0 10px' }}>{count}</h1>
                <Button action={() => { setCount(count + 1) }} text={'  +  '} />
            </div>

            <button onClick={() => { setCount(0) }}>RESET</button>
        </div>
    );
}