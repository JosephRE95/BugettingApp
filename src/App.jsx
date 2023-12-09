import  { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import {fetchData} from './helpers'

// Routes
// import Dashboard, { dashboardLoader } from "./assets/pages/Dashboard";
import Error from "../src/assets/pages/Error";
import About from "./assets/pages/About";
localStorage.setItem('userName', 'joseph')
export function dashboardLoader() {
  const userName = fetchData("userName");
  return  userName
}

export function Dashboard(){
  const  userName  = useLoaderData()
console.log('userName')
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
