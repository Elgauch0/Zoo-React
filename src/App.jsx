import { RouterProvider,createBrowserRouter,createRoutesFromElements ,Route ,Link} from 'react-router-dom'
import HomePageLayout from './components/HomePageLayout';
import HomePage  from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HabitatsPage from './pages/HabitatsPage';
import ConnexionPage from './pages/ConnexionPage';
import ContactPage from './pages/ContactPage';
import DetailHabitat from './pages/DetailHabitat';
import PageNotFound from './pages/PageNotFound';


const router = createBrowserRouter(createRoutesFromElements(
  <>
 <Route path='/' element={<HomePageLayout/>}>

     <Route index element={< HomePage/>}  />
     <Route path='services' element={< ServicesPage/>}/>
     <Route path='habitats' element={<HabitatsPage />}/>
     <Route path='habitats/:id' element={<DetailHabitat/>}/>

     <Route path='Contact' element={< ContactPage/>}/>
     <Route path='connexion' element={<ConnexionPage />}/>
     <Route path='*' element={<PageNotFound/>} />


 
 </Route>
 
  </>));

export default function App() {

  return (
    <RouterProvider router={router}/>
     
  )
}


