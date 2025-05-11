import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const NamasteJavascript = lazy(() =>
  import("./components/NamasteJavascript/NamasteJavascript")
);
const NamasteReact = lazy(() =>
  import("./components/NamasteReact/NamasteReact")
);
const React = lazy(() => import("./components/Interview/React/React"));
const JavaScript = lazy(() =>
  import("./components/Interview/JavaScript/JavaScript")
);
const Html = lazy(() => import("./components/Interview/Html/Html"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/namaste-react",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <NamasteReact />
          </Suspense>
        ),
      },
      {
        path: "/interview/react",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <React />
          </Suspense>
        ),
      },
      {
        path: "/interview/javascript",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <JavaScript />
          </Suspense>
        ),
      },
      {
        path: "/interview/html",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Html />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
