
import players from '.././player.json';
import Player from './Player';

export default function PlayersList() {
  return (
    <>
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {players.map((player) => (
                <Player key={player.jerseyNumber} {...player} />
            ))}
        </div>
    </>
  )
}
