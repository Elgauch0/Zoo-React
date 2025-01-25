import { redirect, useLoaderData } from "react-router";


export function loader(){
 const role = localStorage.getItem('role');
 const jwtToken = localStorage.getItem('token');
 
 if(role !=='admin'){
  return redirect('*')
 }
 try{ 
  fetch('https://localhost:8000/api/administration/admin/users',{ 
  method:'GET',
  headers: {
     'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}` }, }
    ).then(res => res.json()).then(data => {
      console.log('loader',data);
     return data;
     }
    );

    ; }catch(err){ 
      return err; 
    } 
  }

function  Dashbord() {
  const users = useLoaderData();
  
  return (

    <div> ADmin  Dashbord goes Here !</div>
  )
}

export default  Dashbord