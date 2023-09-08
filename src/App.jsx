import './App.css'
import Team from './Team'
import Users from './Users'
import Counter from './counter'
import Friends from './friends'

function App() {

  function handleClick(){
    alert('button click')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{ alert('third clicked') }}>third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
