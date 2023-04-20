import { createBrowserRouter } from "react-router-dom";
import Projects from "./pages/Projects";
import RootLayout from "./pages/RootLayout";
import Teams from "./pages/Teams";
import TimeTracker from "./pages/TimeTracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/tracker",
        element: <TimeTracker />,
        index: true,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
    ],
  },
]);

export default router;
