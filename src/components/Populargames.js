import React , { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
const Pc =()=>{
  const [post, setPost] = useState();
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
  
  
  if(post){
    return(
      <div>
  <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Link to="./Pcgame"><button type="button" class=" float-right text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More</button></Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Pcgames</h2>
      

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {post.slice(0,4).map((game) => (
            <div key={game.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={game.thumbnail}
                  alt={""}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={game.yy}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {game.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{game.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

   
        
        
    
      

      </div>
     
    )
          }
}

export default Pc;