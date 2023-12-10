import { createBrowserRouter, RouterProvider } from "react-router-dom";
//routes
import  Dashboard,{ dashBoardLoader }  from "./pages/Dashboard";
import Error from './pages/Error';
//layouts
import Main, { mainLoader }from "./layouts/Main";
//actions
import { logOutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [

  {
    index: true,
    element: <Dashboard />,
    loader: dashBoardLoader,
    errorElement: <Error />
  },
  {
    path: "logout",
    action: logOutAction
  },
]
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
