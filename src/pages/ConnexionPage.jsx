import { Form, useLoaderData, useActionData,useNavigation,redirect } from 'react-router';
import { loginEmploye } from '../../functions';
import { jwtDecode } from "jwt-decode";



export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try{
     const token = await loginEmploye(email, password);
    localStorage.setItem('token',token);   
    const dtoken = jwtDecode(token);
    localStorage.setItem('dtoken',JSON.stringify(dtoken)); 
    const roles = dtoken.roles;
    if(roles.includes("ROLE_ADMIN")){
      localStorage.setItem('role','admin');
    return redirect('/dashbord');

  }else 
    if(roles.includes("ROLE_VETERINAIRE")){
      localStorage.setItem('role','vet');
      return redirect('/dashvet');

  }else {
    localStorage.setItem('role','employe');
   return redirect('/dashw');
  }
   }catch(err ){
    console.log(err.response);
   return err.response;
   
  }
}

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message') || '';
  
}

export default function ConnexionPage() {
  const error =useActionData();
  const message = useLoaderData(); 
  const {state}=useNavigation();


  return (
    <main className='flex items-center justify-center'>
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <h1>Connexion Page</h1>
        
        <Form method="post" replace>
          <div className="mb-6">
            
            {message && <h3 className='bg-yellow-100 text-yellow-800 p-2 rounded'>{message}</h3>}
            
            
            {error && <h3 className='bg-red-100 text-red-800 p-2 rounded'>{error}</h3>}
            
            <label htmlFor="name" className="block text-gray-800 font-bold">Email :</label>
            <input 
              type="text" 
              name="email" 
              id="name" 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold">Password :</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
            />
          </div>
          
          <button 
            type="submit"
            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            disabled={state ==='submitting  '}
          >
            {state==="submitting" ?"loading...":"se connecter"}
          </button>
        </Form>
      </div>
    </main>
  );
}
