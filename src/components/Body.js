import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";


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
  ]);

  

  return (
    <div>
      <RouterProvider 
            router={appRouter} 
            // future={{
            //     v7_startTransition: true,
            //     v7_relativeSplatPath: true,
            //     v7_normalizeFormMethod: true,
            //     v7_fetcherPersist: true,
            //     v7_partialHydration: true,
            //     v7_skipActionErrorRevalidation: true,
            // }} 
      />
    </div>
  );
};

export default Body;
