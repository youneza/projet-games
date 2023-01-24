import React , { useEffect, useState } from 'react';
import axios from "axios";
import Image from './images/WallpaperDog-397027.jpg';
import Image2 from './images/WallpaperDog-17044239.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import Footer from './footer';
import Pc from './Populargames'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Image3 from './images/nYvfUT.jpg'
const Home =()=>{
  const [post, setPost] = useState();
  useEffect(() => {
    
    const options = {
      method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/games',
  params: {platform: 'browser'},
  headers: {
    platform: 'browser',
    'X-RapidAPI-Key': 'e35f4ff2bcmsh62dfdaf04eae922p13f573jsncc5ce0c3356c',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setPost(response.data);
      
   

    })

  }, []);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  
  if(post){
    return(
      <div>
 
 
 

   <AutoplaySlider
     play={true}
     cancelOnInteraction={false} // should stop playing on user interaction
     interval={3000}
     style={{height:"500px"}}
   >
     <div data-src={Image} />
     <div data-src={Image2} />
     <div data-src={Image3} />
   </AutoplaySlider>
 
  <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Link to="./Browsergames"><button type="button" class=" float-right text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More</button></Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Browsergames</h2>
      

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

   
        
        
    <Pc/>
    
      <Footer/>

      </div>
     
    )
          }
}

export default Home;