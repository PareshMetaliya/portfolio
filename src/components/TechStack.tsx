
import { techStack } from '../constants/constant'

const TechStack = () => {
  return (
    <>
      {/* Tech Stack */}
            <section className="p-10 text-center container">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">Tech Stack</h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-lg flex items-center gap-2">
                    {tech.icon} {tech.name}
                  </div>
                ))}
              </div>
            </section>
    </>
  )
}

export default TechStack
