// Fetching habitat data 
export async function getHabitats() {
    try {
        const res = await fetch('https://127.0.0.1:8000/api/habitats');
        
        if (!res.ok) {
            throw new Error(`Failed to fetch habitats with status ${res.status}`);
        }

       
        const data = await res.json();
        return data; 

    } catch (error) {
        console.error('Error while fetching habitats:', error);
        
        return { error: error.message };
    }
}

// Employee login function with token retrieval and error handling
export async function loginEmploye(email, password) {
    
        const res = await fetch('https://127.0.0.1:8000/api/login_check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ username:email,password:password })
        });
        if(!res.ok){
            throw 'Email/password not correct or server down';
        }
        
        const { token } = await res.json();
         return token; 


         
    
}
export function getAnimals(){
    fetch('https://127.0.0.1:8000/api/animals/')
    .then(res=> res.json()).then(data =>data).catch(error=>console.error(error));


}
