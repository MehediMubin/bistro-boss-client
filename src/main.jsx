import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="max-w-screen-2xl mx-auto">
        <RouterProvider router={router} />
        </div>
    </React.StrictMode>
);
