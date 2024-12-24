import {Link,useLoaderData} from 'react-router'
import desertImg from '../assets/HabitatImages/desert.jpg'
import foretImg from '../assets/HabitatImages/foret.jpg';
import jungleImg from '../assets/HabitatImages/jungle.jpg';
import savaneImg from '../assets/HabitatImages/savane.jpg';
import { getHabitats,getAnimals } from '../../functions';
import { Suspense } from 'react';


const ImgMap={
  'Jungle':jungleImg,
  'Savane':savaneImg,
  'Desert':desertImg,
  'Foret':foretImg
}
export function loader(){
  return getHabitats()
  }

  function HabitatsPage(){
    const habitats = useLoaderData();
    

   return (
    <>
    <h1>Nos Habitats :</h1>
    <Suspense fallback={<h2>Loading Data ...</h2>}>
    {habitats.map(habitat => (
         <Link 
           key={habitat.id}
           to={`${habitat.id}`} 
           state={{habitat, image: ImgMap[habitat.nom]}}
         >
           <figure className='flex flex-col items-center m-4 p-4 bg-gray-100 rounded-lg shadow-md'>
             <img 
               src={ImgMap[habitat.nom]} 
               alt={`photo de ${habitat.nom}`}
               className='w-full h-48 rounded-lg object-cover' 
             />
             <figcaption className='mt-2 text-lg font-semibold'>{habitat.nom}</figcaption>
             <p className='mt-1 text-gray-700'>{habitat.description}</p>
           </figure>
         </Link>
       ))}







    </Suspense>
    </>

   )



  }








export default HabitatsPage
