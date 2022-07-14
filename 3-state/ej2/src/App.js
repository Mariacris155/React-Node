
import './App.css';

function App() {
  let array = ["Bulbasaur", "Charmander", "Squirtle"]
  return (
   <ul>
    {array.map((pokemon)=><li>{pokemon}</li>)}
   </ul>
  );
}

export default App;
