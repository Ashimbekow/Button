import './App.css'


function App() {

  return (
    <div className="wrapper">
      <h1>React</h1>
      <Type/>
      <ul>
      <Get name="hello friends"/>
      <Get name="hello world"/>
      <Get name="hello a dog"/>
      <Get name="hello a cat"/>
      </ul>
    </div>
  )
}
function Get(props) {

  return (
    <>
    <li>{props.name}</li>
    </>
  )
}

function Type(){
  return(
    <h2>Заголовок 2уровня</h2>
  )
}

export default App
