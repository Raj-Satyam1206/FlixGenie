import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieDetails from "./MovieDetails";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
