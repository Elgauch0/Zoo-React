// Fetching habitat data from API with error handling
export async function getHabitats() {
    try {
        const res = await fetch('https://127.0.0.1:8000/api/habitats');
        
        if (!res.ok) {
            throw new Error(`Failed to fetch habitats with status ${res.status}`);
        }

        // Ensure the response is in JSON format
        const data = await res.json();
        return data; // Return the habitat data

    } catch (error) {
        console.error('Error while fetching habitats:', error);
        // Return a structured error object with error message
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
