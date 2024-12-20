import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import desertImg from '../../public/HabitatImages/desert.jpg';
import foretImg from '../../public/HabitatImages/foret.jpg';
import jungleImg from '../../public/HabitatImages/jungle.jpg';
import savaneImg from '../../public/HabitatImages/savane.jpg';


const ImgMap={
  'Jungle':jungleImg,
  'Savane':savaneImg,
  'Desert':desertImg,
  'Foret':foretImg
}



function HabitatsPage() {
  const [habitats,setHabitats]= useState(null);
  useEffect(()=>{
  fetch('https://127.0.0.1:8000/api/habitats').then(res =>res.json()).then(data => {
    setHabitats(data);
    console.log(data);
  }
  );
},[]);
  
///////////////
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