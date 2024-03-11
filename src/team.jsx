import { useState } from "react"

export default function Team() {
    const [team, newPlayer] = useState(11);

    const handleAdd = () => {
        const countPlayer = team + 1;
        newPlayer(countPlayer)
    }

    const handleRemove = () => {
        newPlayer(team - 1);

    }

    const teamStyle = {
        border: '3px solid green',
        margin: '15px',
        padding: '20px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}