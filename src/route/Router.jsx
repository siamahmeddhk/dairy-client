import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Add from "../pages/Add";
import All from "../pages/All";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/add',
            Component: Add,
        },
        {
            path: '/all',
            loader: () => fetch('https://dairy-server.vercel.app/pages'),
            Component: All,
        }
    ]
  },
]);