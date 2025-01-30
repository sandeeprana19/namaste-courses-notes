import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import { lazy, Suspense } from "react";
import Interview from "./components/Interview/Interview";

const App = () => {
  const NamasteJavascript = lazy(() =>
    import("./components/NamasteJavascript/NamasteJavascript")
  );
  const NamasteReact = lazy(() =>
    import("./components/NamasteReact/NamasteReact")
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <NamasteJavascript />
            </Suspense>
          ),
        },
        {
          path: "/react",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <NamasteReact />
            </Suspense>
          ),
        },
        {
          path: "/interview",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Interview />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
