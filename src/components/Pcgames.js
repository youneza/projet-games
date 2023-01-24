import axios from "axios";
import React, { useEffect, useState }  from "react";
import Footer from "./footer";



function Pcgame () {
  const [post, setPost] = useState();
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(20);


  useEffect(() => {
    
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/games',
      params: {platform: 'pc'},
      headers: {
        platform: 'pc',
        'X-RapidAPI-Key': 'e35f4ff2bcmsh62dfdaf04eae922p13f573jsncc5ce0c3356c',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })

  }, []);
  function shooter(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'shooter'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }
 
  function Racing(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Racing'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }
 

  function Anime(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Anime'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }

  function Sports(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Sports'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }

  function Fantasy(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Fantasy'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }


  function Social(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Social'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }

  function Battle_roy(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Battle Royale'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }
 

  function Fighting(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Fighting'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }
 
  function Sci_fi(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Sci-Fi'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }

  function Moba(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Moba'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }


  function Strategy(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'Strategy'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }

  function Mmorpg(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {category: 'MMORPG'},

      headers: {
        'X-RapidAPI-Key': '49e0763476msh259b59cebde97cdp174671jsn3d705f4b0b09',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })
  }
 
  const Next=()=>{
    
    setFirst(first+20)
    setSecond(second+20)


  }
  
  const Prev=()=>{
    if(first===0){ 

    }
    else{
      setFirst(first-20)
      setSecond(second-20)
    }
    
  }

  if(post){
   
 
  return (
    <div  className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Games</h2>
      
      <button onClick={()=>shooter()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3   mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Shooter</button>
      <button onClick={()=>Racing()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Racing</button>
      <button onClick={()=>Anime()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Anime</button>
      <button onClick={()=>Sports()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sports</button>
      <button onClick={()=>Fantasy()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Fantasy</button>
      <button onClick={()=>Social()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Social</button>
      <button onClick={()=>Battle_roy()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">battle Royal</button>
      <button onClick={()=>Fighting()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Fighting</button>
      <button onClick={()=>Sci_fi()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sci-Fi</button>
      <button onClick={()=>Moba()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Moba</button>
      <button onClick={()=>Strategy()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3  mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Strategy</button>
      <button onClick={()=>Mmorpg()} id="dropdownLeftStartButton"  data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">MMORPG</button>


      <div  className="grid grid-cols-1 pt-5 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {post.slice(first,second).map((game) => (
          <a  href={'#-'} className="group">
            <div Layout className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              
              <img
                src={game.thumbnail}
                alt={game.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h1 className="mt-4  text-gray-700">{game.title}</h1>
            <h2 className="mt-1 text-lg font-medium text-gray-900">{game.release_date}</h2> <br/>  
<a href={game.game_url} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Now</a>

          </a>
        ))}
      </div>
  
<div class="flex flex-col items-center pt-10">
  <div class="inline-flex mt-2 xs:mt-0">
  <button onClick={()=>Prev()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Prev
    </button>
    <button onClick={()=>Next()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    

  </div>
  
</div>

    </div>
  <Footer/>
  </div>

  )
  
}

 }
 

export default Pcgame;