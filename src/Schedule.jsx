import { useState } from "react"




function Schedule({school, opponents}) {
    const opponentList = opponents.map( opponent =>
        <li>
            {opponent}
        </li>
    )
    return (
        <>
            <h2>{school} 2025-2026 Schedule</h2>
            <ul>
                {opponentList}
            </ul>
        </>
    )
}


export default Schedule