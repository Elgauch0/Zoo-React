import { RouterProvider,createBrowserRouter,createRoutesFromElements ,Route ,Link} from 'react-router'
import HomePageLayout from './components/HomePageLayout';
import HomePage  from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HabitatsPage,{loader as habitatLoader} from './pages/HabitatsPage';
import ConnexionPage,{loader as homeLoader,action as loginAction}from './pages/ConnexionPage';
import ContactPage from './pages/ContactPage';
import DetailHabitat from './pages/DetailHabitat';
import PageNotFound from './pages/PageNotFound';
import ErrorPage from './pages/ErrorPage';
import HabitatsPageLayout from './components/HabitatsPageLayout';
import Dashbord from './pages/Administration/Dashbord';


const router = createBrowserRouter(createRoutesFromElements(
  <>
 <Route path='/' element={<HomePageLayout/>} errorElement={<ErrorPage/>}>

     <Route index element={< HomePage/>}/>
      <Route path='services' element={< ServicesPage/>} />
     /**habitats */
     <Route path='habitats'element={<HabitatsPageLayout/>}>
     <Route index element={<HabitatsPage />}loader={habitatLoader}/>
     <Route path=':id' element={<DetailHabitat/>}/>
     </Route>


     <Route path='Contact' element={< ContactPage/>}/>

     /**Direction */
     <Route path='connexion' element={<ConnexionPage />} loader={homeLoader} action={loginAction}/>
     <Route path='dashbord' element ={<Dashbord />}/>







     <Route path='*' element={<PageNotFound/>} />

 </Route>
 
  </>));

export default function App() {

  return (
    <RouterProvider router={router}/>
     
  )
}


