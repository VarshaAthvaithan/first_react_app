import React from "react";
import { useEffect } from "react";


const API_URL ='http://www.omdbapi.com?apikey=';
const App = () =>{

    const searchMovies = async(title)=>{
      const response=await fetch(`${API_URL}&s={title}`);
      const data = await response.json();
      console.log(data)
    }

    useEffect(()=>{
         searchMovies('Superman');
    },[]);


    return(
      <div className="app">
        <h1>MovieStore</h1>

        <div className="search">
            <input placeholder="Search for movies" value="superman" onChange={()=>{}}>
            </input>
        </div>
      </div>
    );
}

export default App;