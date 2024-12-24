import { redirect } from "react-router";

export function loader(){
   const role = localStorage.getItem('role');
  if(role !== 'employe'){
   return redirect('*')
  }
  return null
   }

function DashW() {
  return (
    <div>DashBoard Worker</div>
  )
}

export default DashW