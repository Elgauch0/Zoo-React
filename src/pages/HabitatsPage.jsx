import {useState,useEffect} from 'react'
import {Link,useLoaderData} from 'react-router-dom'
import desertImg from '../assets/HabitatImages/desert.jpg'
//import desertImg from '../assets/HabitatImages/desert.jpg';
import foretImg from '../assets/HabitatImages/foret.jpg';
import jungleImg from '../assets/HabitatImages/jungle.jpg';
import savaneImg from '../assets/HabitatImages/savane.jpg';
import { getHabitats } from '../../functions';


const ImgMap={
  'Jungle':jungleImg,
  'Savane':savaneImg,
  'Desert':desertImg,
  'Foret':foretImg
}
export function loader(){
  return getHabitats();
  }



function HabitatsPage(){
  const  habitats = useLoaderData();
  
  

const habitatsElements = habitats?.map( habitat => {
  return (
      
    <Link to={`${habitat.id}`}
     aria-label={`Cliquez ici pour voir ${habitat.nom} en détail`} 
     key={habitat.id} >
       <figure className='flex flex-col items-center m-4 p-4 bg-gray-100 rounded-lg shadow-md'> 
        <img className='w-full h-48 rounded-lg object-cover' src={ImgMap[habitat.nom]} 
        alt={`photo de ${habitat.nom}`} /> <figcaption 
        className='mt-2 text-lg font-semibold'>{habitat.nom}
        </figcaption> 
        <p className='mt-1 text-gray-700'>{habitat.description}</p>
         </figure>
          </Link>
   
   
  )
})


return (
     <>
    <h1>HabitatsPage</h1>
    {habitatsElements ? habitatsElements:<h3>loading...</h3> }
     </>
  )
}


export default HabitatsPage