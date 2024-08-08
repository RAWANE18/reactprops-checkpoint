
import players from '.././player.json';
import Player from './Player';

export default function PlayersList() {
  return (
    <>
      {/* mapping through all the elements in the array of players */}
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {players.map((player) => (
                <Player key={player.jerseyNumber} {...player} />
            ))}
        </div>
    </>
  )
}
