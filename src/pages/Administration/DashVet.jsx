import { redirect, useLoaderData } from "react-router";
import RapportVet from "../../components/components/RapportVet";


export async function loader() {
    const jwtToken = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    
    if (role !== 'vet') {
        return redirect('*'); 
    }

    try {
        
        const response = await fetch('https://localhost:8000/api/administration/vet/rapport', {
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
   
   
  
  
    
        return (
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Rapports Vétérinaires :</h1>
              <RapportVet rapports={rapports} />
            </div>
          );
           
  }
    export default DashVet
