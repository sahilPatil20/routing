import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const path = window.location.pathname;

// if (path == "/") {
//     root.render(<Home />);
// }
// else if (path == "/About") {
//     root.render(<About />)
// }
// else if (path == "/Contact") {
//     root.render(<Contact />)
// }
// else {
//     root.render(<h3>404 page not found</h3>)
// }

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/About",
        element : <About />
    },
    {
        path : "/Contact",
        element : <Contact />
    }
])

root.render(<RouterProvider router={router}/>);