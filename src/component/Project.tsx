import NavBar from "./home/component/NavBar";

const Project = () => {
  const projects = [
    { name: "X-CLONE", type: "Web Project", link: "https://mobile-alpha-five.vercel.app/" },
    { name: "Y-PROJECT", type: "Mobile App", link: "https://example.com/" },
    { name: "Z-PROJECT", type: "Web Project", link: "https://example.com/" },
    { name: "A-PROJECT", type: "Mobile App", link: "https://example.com/" },
  ];

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-8 mt-20 items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-64 p-6 border border-cyan-400 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105
              ${index % 2 === 0 ? "self-start ml-0" : "self-end mr-0"}`}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.type}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Project;
