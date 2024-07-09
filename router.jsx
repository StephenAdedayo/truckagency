import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import About from "./src/pages/about/About";
import Contact from "./src/pages/contact/Contact";
import Services from "./src/pages/services/Services";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path:"/about-us", element:<About />},
    {path:"/contact-us", element:<Contact />},
    {path:"/services", element:<Services />}
])