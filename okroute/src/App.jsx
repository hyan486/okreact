import Comp from "./components/Comp"
function App(props) {
  const list = ['bye1','bye2','bye3'];
  return (
    <div className="App">
      <h1>Main</h1>
      {
        list.map((item, index)=>(
          <Comp value={item} key={index}/>    
        ))
      }
    </div>
  )
}

export default App

