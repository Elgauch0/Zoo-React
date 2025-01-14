import { redirect } from "react-router";

export async function loader(){
   const role = localStorage.getItem('role');
   const jwtToken = localStorage.getItem('token');
   console.log(jwtToken);
   console.log(role);
  if(role !== 'employe'){
   return redirect('*')
  }
   try {
    const res = await fetch('https://localhost:8000/api/animals',{
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${jwtToken}`
      }


    });
    const data = await res.json();
    console.log(data);
    return data;

   }catch(err){
    return console.log(err);
   }
   }

function DashW() {
  return (
    <div>DashBoard Worker</div>
  )
}

export default DashW