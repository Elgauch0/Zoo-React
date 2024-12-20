import { Outlet,NavLink } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"



function HomePageLayout() {
  return (
      <>      
    <Header />
    <Outlet />
    <Footer/>
    
      </>
 )
}

export default HomePageLayout