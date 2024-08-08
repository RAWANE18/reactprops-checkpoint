import"./App.css"
import PlayersList from "./component/PlayersList"
export default function App() {
  return (
  
        <div className="body">
            <h1 style={{ textAlign: 'center', padding: '20px' , color:"#0088c2"}}>FIFA Player Cards</h1>
            <PlayersList />
        </div>
   
  )
}
