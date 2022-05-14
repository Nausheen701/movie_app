import './App.css'
import { useEffect } from 'react'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=e77dcbb9'

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)

  }
  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div classname="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
          />
          <img  
            src={SearchIcon}
            alt="search"
            onCLick={() => {}}
          />
      </div>
      <div  className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
   
  )
  }

  export default App 

 // const name = 'Muhammad'
  // const host = 'Mama'
  // const isNameShowing = false


  //  <h1>Salams from {host}</h1>
  // <h2>Hello {isNameShowing ? name : 'friend'}</h2> 
  // {name ? ( */} */}
    // <> 
// test */}
    // <h1>Hi {name}</h1> */}
    //  </>
//  ) : ( 
    // <>
//  <h1>test</h1>
  //  <h2>Who are you, friend?</h2>
//   </>

//  )}

