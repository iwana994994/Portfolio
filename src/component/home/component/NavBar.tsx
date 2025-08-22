import { Link } from "react-router-dom"
import { useDarkMode } from "../useDarkMode"


const NavBar = () => {

    const [darkMode, setDarkMode]=useDarkMode();
  return (
    <nav>
        <div className=" flex justify-center gap-20 mt-6">
            <div className=" ml-20 flex-1">
                <h1 className="text-2xl font-bold text-glow font-mono">Ivana.web.dev</h1>
            </div>
            <div className="ml-10 flex-1" >
                <ul className="flex flex-row gap-6 text-2xl font-bold text-glow font-mono ">
                    <li><Link to="/" className="border-b-2 hover:border-cyan-400 ">Home</Link></li>
                   <li><Link to="/project"className="border-b-2 hover:border-cyan-400 ">Project</Link></li>
                   <li><Link to="/contact" className="border-b-2 hover:border-cyan-400 ">Contact</Link></li>
                </ul>
        </div>
            <button onClick={() => setDarkMode(!darkMode)} className=" mr-10  rounded-full border border-1 p-2 ">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        </div>
    </nav>
  )
}

export default NavBar