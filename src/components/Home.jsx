import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const input = document.getElementById('team');
    
        const handleKey = (event) => {
          if (event.key === 'Enter') {
            const team = event.target.value;
            if (team) {
              navigate('/schedule/' + encodeURIComponent(team));
            }
          }
        };
    
        input?.addEventListener('keydown', handleKey);
    
        // Clean up event listener when component unmounts
        return () => input?.removeEventListener('keydown', handleKey);
      }, []);
    
    return (
        <>
            <h1 className="header">Big Ten Football Future Matchups</h1>

            <p>Input a Big Ten Team</p>
            <input
            type="text"
            id="team"
            name="team"
            title="Input the name of a Big Ten University"
            placeholder="Ex: Michigan State University"
            />
        </>
    );
}

export default Home;