import { Outlet,NavLink } from "react-router"
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