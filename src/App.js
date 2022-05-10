import './App.css'
import Person from './Person.js'


const App = () => {
  const name = 'Muhammad'
  const host = 'Mama'
  const isNameShowing = false

  return (
    <div className="App">
  
     
      <Person name={'Muhammad'} lastname={'B'} age={'9'}/>
      <Person name={'Inaya'} lastname={'K'} age={'11'}/>
      <Person name={'Hasan'} lastname={'K'} age={'9'}/>
      <Person name={'Ali'} lastname={'D'} age={'8'}/>
      <Person name={'Recep'} lastname={'H'} age={'9'}/>
      
    </div>
  )

  // <h1>Salams from {host}</h1>
  // {/* <h2>Hello {isNameShowing ? name : 'friend'}</h2> */}
  // <h3></h3>
  // {name ? (
  //   <> 
  //   {/* test */}
  //   <h1>Hi {name}</h1>
  //   </>
  // ) : ( 
  //   <>
  //   <h1>test</h1>
  //   <h2>Who are you, friend?</h2> 
  //   </>

  // )}


}

export default App


