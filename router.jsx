import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import About from "./src/pages/about/About";
import Contact from "./src/pages/contact/Contact";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path:"/about-us", element:<About />},
    {path:"/contact-us", element:<Contact />}
])