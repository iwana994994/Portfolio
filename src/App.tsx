
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home.tsx"
import NotFoundPage from "./component/NotFoundPge.tsx"
import ContactMe from "./component/ContactMe.tsx"
import Project from "./component/Project.tsx"
function App() {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
