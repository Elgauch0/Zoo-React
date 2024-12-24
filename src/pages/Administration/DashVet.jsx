import { redirect } from "react-router";


export function loader(){
  const role = localStorage.getItem('role');
  if(role !=='vet'){
   return redirect('*')
  }
  return null
   }
function DashVet() {
  return (
    <div>DashVet goes here</div>
  )
}

export default DashVet