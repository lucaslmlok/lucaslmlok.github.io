import { ToastContainer } from "react-toastify";
import Header from "./layouts/Header";
import Intro from "./layouts/Intro";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="antialiased">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />
            <main>
                <Intro />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}

export default App;
