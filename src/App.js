import './App.css'

const Person

const App = () => {
  const name = 'Muhammad'
  const host = 'Mama'
  const isNameShowing = false

  return (
    <div className="App">
      <h1>Hello from {host}</h1>
      {/* <h2>Hello {isNameShowing ? name : 'friend'}</h2> */}
      <h3></h3>
      {name ? (
        <> 
        {/* test */}
        <h1>Hi {name}</h1>
        </>
      ) : ( 
        <>
        <h1>test</h1>
        <h2>Who are you, friend?</h2> 
        </>
        

      
      )}
    </div>
  );
}

export default App
