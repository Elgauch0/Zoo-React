export function sleep(s){
    return new Promise(resolve => setTimeout(resolve,s*1000));
}
 





export async  function getHabitats() {
    try {
        const promise =  fetch('https://127.0.0.1:8000/api/habitats').then(res => res.json());
       
        return promise; 

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
