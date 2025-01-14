import { redirect, useLoaderData } from "react-router";


export async function loader() {
    const jwtToken = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    
    if (role !== 'vet') {
        return redirect('*'); 
    }

    try {
        
        const response = await fetch('https://localhost:8000/api/rapports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`,
            },
        });

        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des rapports');
        }

        
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Une erreur est survenue');
    }
}





            
 function DashVet() {

   const rapports = useLoaderData();
   
   const rapportElements= rapports.map(rapport =>(
          <div key={rapport.id}>
            <h2>{rapport.etat}</h2>
            <p>{rapport.date}</p>
            <h3>{rapport.rapports_animal.race}</h3>
          </div>
   )
     

   )
  
    return ( 
         <div>{rapportElements}</div> ) 
  }
    export default DashVet
