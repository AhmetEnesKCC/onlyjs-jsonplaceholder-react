import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Common/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={Router} />
    </Layout>
  </React.StrictMode>
);
