import { useParams } from 'react-router-dom';

const opponents = ['Michigan', 'Ohio State', 'Penn State', 'Wisconsin', 'Iowa', 'Nebraska', 'Northwestern', 'Illinois', 'Purdue', 'Maryland', 'Rutgers']


function Schedule() {
    const { school } = useParams();

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