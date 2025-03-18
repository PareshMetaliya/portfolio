import { projects } from "../constants/constant";

const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section className="p-10 container">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-100 ">Projects</h2>
        <div className="flex flex-col gap-4 items-center m-6 max-w-[1150px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-400 p-5 flex flex-col lg:flex-row max-w-[1000px] max-md:w-[70vw]  "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 object-cover rounded-lg mx-auto "
              />
              <div className="md:ml-4 flex-1">
                <h3 className="text-xl font-semibold mt-4 lg:mt-0 text-center md:text-left text-gray-100">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm text-center md:text-left">
                  {project.description}
                </p>
                <ul className="mt-2 text-gray-300 text-sm list-disc list-inside">
                  {project.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 p-2 justify-center md:justify-start max-[400px]:flex-col">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-400 font-bold px-4 py-2 border-2 rounded-xl border-blue-400  text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-green-400 font-bold px-4 py-2 border-2 border-green-400 rounded-xl  text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
