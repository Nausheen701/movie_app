// import './App.css'

import Person from './Person.js'
import Book from './Book.js'


const App = () => {
  return (
    <>
    <div>
      <Book title={'Philosophers Stone'}/>
      <Book title={'Chamber of Secrets'}/>
      <Book title={'Prisoner of Azkaban'}/>
      <Book title={'Goblet of Fire'}/>
      <Book title={'Order of the Phoenix'}/>
      <Book title={'Half-Blood Prince'}/>
      <Book title={'Deathly Hallows'}/>
    </div>
    <div className="App"><center>
       <Person name={'Muhammad B'} age={'9'} city={'Istanbul'}/>
       <Person name={'Inaya K'} age={'11'} city={'Livingston'}/>
       <Person name={'Hasan K'} age={'9'} city={'Livingston'}/>
       <Person name={'Ali D'} age={'8'} city={'Istanbul'}/>
       <Person name={'Eda B'} age={'10'} city={'Istanbul'}/>  
       </center></div>
       </>
  )
}

export default App


 // const name = 'Muhammad'
  // const host = 'Mama'
  // const isNameShowing = false

  


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

