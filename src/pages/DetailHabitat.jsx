import { useLocation } from "react-router";

function DetailHabitat() {
 const {state} = useLocation();
  const {habitat,image}=state;
  
  return (
    <>
    <img src={image} />
    <h1>habitat :{habitat.nom}</h1>
    <p>description: {habitat.description}</p>
    <h3>Animaux dans cet habitat:</h3>
    <ul>
    {habitat.animals.map(animal=>(
      <li key={animal.prenom}>
        <h2>{animal.prenom}</h2> </li>))}
    </ul>
    </>
  )
}

export default DetailHabitat ;