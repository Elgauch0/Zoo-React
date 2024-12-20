import { NavLink } from "react-router-dom"

function Header() {
    const Active ={
        fontWeight: 'bold',
        textDecoration: 'underline',
        color:'#161616'

    }

  return (
    <nav className="flex justify-evenly h-8 bg-lime-800">
      <NavLink
        to='/'
        style={({isActive})=> isActive ? Active:null} 
        end
        >
            ARCADIA</NavLink>   
      <NavLink
       to='services'
        style={({isActive})=> isActive ? Active:null}
       >
        Nos Services</NavLink>
      <NavLink
       to='habitats'
        style={({isActive})=> isActive ? Active:null}
       >
        Habitats</NavLink>
      <NavLink
       to='Contact'
        style={({isActive})=> isActive ? Active:null}
       >
        Contactez-Nous</NavLink>
      <NavLink
       to='Connexion'
        style={({isActive})=> isActive ? Active:null}
       >
        Administration</NavLink>
    </nav>
    
  )
}

export default Header