import './App.css'
import Person from './Person.js'


const App = () => {
  // const name = 'Muhammad'
  // const host = 'Mama'
  // const isNameShowing = false

  return (
    <div className="App">
  
     <h1>Welcome to the Harry Potter book club!</h1>
     <h2> Here are the current members:  </h2> 
     
      <Person name={'Muhammad B'} age={'9'}/>
      <Person name={'Inaya K'} age={'11'}/>
      <Person name={'Hasan K'}  age={'9'}/>
      <Person name={'Ali D'} age={'8'}/>
      <Person name={'Eda B'} age={'9'}/>
      
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


