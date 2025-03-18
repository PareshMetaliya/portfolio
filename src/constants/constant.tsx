import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiRedux, SiZod, SiRazorpay, SiJsonwebtokens, SiReacthookform } from "react-icons/si";
import PizzaProject1 from "../assets/project-1.png";
import PizzaProject2 from "../assets/PizzaApp2.0.png";
import NotesProject from "../assets/project-2.png";

export const techStack = [
  { name: "React.js", icon: <FaReact size={24} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress size={24} className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" /> },
  { name: "Redux Toolkit", icon: <SiRedux size={24} className="text-purple-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={24} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
  { name: "Zod", icon: <SiZod size={24} className="text-yellow-400" /> },
  // { name: "Razorpay", icon: <SiRazorpay size={24} className="text-blue-600" /> },
  { name: "Mongoose", icon: <FaDatabase size={24} className="text-green-400" /> },
  { name: "React Hook Form", icon: <SiReacthookform size={24} className="text-pink-300" /> },
  { name: "JWT", icon: <SiJsonwebtokens size={24} className="text-orange-400" /> }
];

export const projects = [
  {
    name: "Pizza Ordering App 2.0",
    description: "An advanced full-stack pizza ordering platform with an interactive admin panel, payment gateway integration, and real-time order tracking.",
    features: [
      "Admin panel with order management and revenue analytics",
      "Advanced Mongoose queries, aggregation pipelines, and virtual fields",
      "URL-based filtering, pagination, and search functionality",
      "Razorpay payment gateway integration for secure transactions",
      "Fully responsive UI with Tailwind CSS and ShadCN components",
      "Real-time status updates, filters & pagination",
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Zod", "Redux Toolkit (Thunk)", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Mongoose", "React Hook Form"],
    image: PizzaProject2,
    github: "https://github.com/PareshMetaliya/PizzaApp2.0",
    live: "https://pizza-app2-0.vercel.app/"
  },
  {
    name: "Pizza Ordering App 1.0",
    description: "A full-stack pizza ordering app built with MERN stack, featuring Formik, Yup, and Sass for styling.",
    features: [
      "Secure user authentication using JSON Web Tokens (JWT).",
      " Enhanced shopping experience with a Redux-based shopping cart.",
      "Transparent order tracking from preparation to delivery.",
      "Real-time order status updates for efficient communication."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT","Redux Toolkit"],
    image: PizzaProject1,
    github: "https://github.com/PareshMetaliya/PizzaOrderApp",
    live: "https://pizza-app-frontend-mocha.vercel.app/"
  },

  {
    name: "Notes App",
    description: "A simple MERN stack notes application with authentication and CRUD operations.",
    features: [
      "Implementing robust user authentication with JSON Web Tokens (JWT).",
      "Utilizing the Context API for efficient state management and seamless data sharing.",
      "Empowering users to effortlessly add, update, and delete their notes."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API"],
    image: NotesProject,
    github: "https://github.com/PareshMetaliya/iNotebook",
    live: "https://i-notebook-frontend-navy.vercel.app/"
  }
];