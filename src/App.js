import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import { lazy, Suspense } from "react";

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
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
