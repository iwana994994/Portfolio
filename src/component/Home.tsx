
import NavBar from "./home/component/NavBar.tsx"
import { useDarkMode } from "./home/useDarkMode.ts"

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const [darkMode]=useDarkMode();
  const skills = ["Vite","MERN", "REACT", "REACT NATIVE","TypeScript", "MONGO DB", "EXPRESS", "Tailwind", "Shadcn/ui", "Socket.io","Mongoose","Clerk"]
  const getRandomMargin = () => Math.floor(Math.random() * 80) // 0 - 20px

  return (
      <>
      <NavBar />
      <div className={`flex flex-col items-center mt-20 text-center overflow-hidden px-8 ${darkMode?"text-black:bg-black":"text-white:bg-white"}`}>
        <h1 className="text-6xl font-bold mb-6">
          Hi, <br />
          I'm <span className="text-cyan-400">Ivana</span>,
        </h1>
        <h2 className="text-4xl font-semibold mb-6">web developer</h2>

    
        <div className="flex flex-row justify-center gap-6 mb-8 mt-8 
  dark:bg-slate-400/5 backdrop-blur-sm shadow-lg ">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={` font-mono text-2xl font-bold hover:scale-105`}
              style={{ marginTop: `${getRandomMargin()}px` }}
            >
              {skill}
            </div>
          ))}
        </div>
 <div>
      <button
 className={`  font-bold font-mono text-2xl m-2 w-64 p-6 border border-cyan-400 rounded-xl bg-white/5 dark:bg-gray-800/5 shadow-lg transition-transform hover:scale-105 backdrop-blur-sm`}
  onClick={() => navigate("/contact")}
>
  Contact me
</button>

      <button
      className={` font-bold font-mono text-2xl m-2 w-64 p-6 border border-cyan-400 rounded-xl bg-white/5 dark:bg-gray-800/5 shadow-lg transition-transform hover:scale-105 backdrop-blur-sm`}
        onClick={() => navigate("/project")}
      >
        Project
      </button>
    </div>
      </div>
    </>
  )
}

export default Home