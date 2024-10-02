import { useState } from "react"


export default function Header(){


    const [menuBar,setMenuBar] = useState(false);

    function handlClick(){
        setMenuBar(prevState => !prevState);
       
    }
    
    


    return (
        <header className="bg-lime-500">
        <nav className="flex justify-between items-center">
            <a href="#">
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/pet-commands-summon.png" alt="pet-commands-summon"/>
        </a>
       
        <ul className="hidden md:flex  m-2 p-2">
            <li className="mx-2 hover:text-blue-500"><a href="#">Accueil </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Services </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Habitats </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Contact </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Connexion </a></li>
        </ul>
        {/* mobile menu*/}
        {menuBar &&
        <ul className="flex-col  order-first p-3 md:hidden">
            <li className="mx-2 hover:text-blue-500"><a href="#">Accueil </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Services </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Habitats </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Contact </a></li>
            <li className="mx-2 hover:text-blue-500"><a href="#">Connexion </a></li>
        </ul>
         }
          <div className="md:hidden">
            <button className="text-white fixed top-0 right-0 mt-4 mr-4" onClick={handlClick} aria-label="open menu">
                <svg 
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                ><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        </nav>
        </header>
        
    )

}