import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Dashboard, { dashboardLoader } from "./assets/pages/Dashboard";
import Error from "../src/assets/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
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
