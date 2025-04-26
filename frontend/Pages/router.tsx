import { createBrowserRouter } from "react-router";
import App from "../src/App"
import SecretaryPage from "./SecretaryPage"; 
import DoctorPage from "./DoctorPage";
import AgentPage from "./AgentPage";
import AdminPage from "./AdminPage";
import React from "react";

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
        {
          path: "/secretary",
          element: <SecretaryPage />,
        },
        {
          path: "/doctor",
          element: <DoctorPage />,
        },
        {
          path: "/agent",
          element: <AgentPage />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
    ],
},
]);
export default router;