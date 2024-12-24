import { redirect } from "react-router";


export function loader(){
 const role = localStorage.getItem('role');
 if(role !=='admin'){
  return redirect('*')
 }
 return null
  }

function  Dashbord() {
  return (

    <div> ADmin  Dashbord goes Here !</div>
  )
}

export default  Dashbord