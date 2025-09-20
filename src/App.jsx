import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function App() {
  // const roles = ["Data Scientist", "GenAI Enthusiast", "Pythoneer"];
  const roles = ["Data Science", "GenAI and NLP", "Python", "Machine Learning"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = 'Parth Agarwal';
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Parth Agarwal</h1>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-28 lg:pt-36 gap-12">
        {/* Left */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            I turn <span className="text-blue-400">data</span> into measurable{" "}
            <span className="text-green-400">insights and business wins</span>.
          </h2>
          <p className="text-gray-300 text-lg">
            6 years in Data Science | Proven expertise in{" "}
            <span className="font-semibold text-white">{roles[index]}</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1oJeBlGOUBbG1fMMII9yJQV83-V4Lb-JI/view"
              target="_blank"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 border border-gray-500 hover:border-blue-400 px-6 py-3 rounded-xl font-semibold transition"
            >
              <BriefcaseIcon className="h-5 w-5" />
              Projects
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold">6+</p>
              <p className="text-gray-400 text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-gray-400 text-sm">Industry Projects</p>
            </div>
            {/* <div className="text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-gray-400 text-sm">Industries</p>
            </div> */}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-green-400 rounded-full animate-pulse blur-2xl opacity-30"></div>
            <img
              src="img/profile_pic.png"
              alt="Parth Agarwal"
              className="relative w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline*/}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-8 text-center">Career Timeline</h3>
        <div className="relative flex justify-between items-start pt-12 pb-6">

          <div className="absolute top-[3.5rem] left-0 right-0 h-1 bg-gray-700"></div>

          {/* Entry 1 */}
          <div className="flex-1 text-center relative pt-12">
            {/* Marker dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
            {/* Content */}
            <div className="mt-1">
              <p className="text-sm text-gray-400">Jan 2019 - Apr 2019</p>
              <h4 className="text-xl font-semibold mt-1">Project Intern</h4>
              <p className="text-sm text-blue-400">Tata Consultancy Services</p>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="flex-1 text-center relative pt-12">
            {/* Marker dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
            {/* Content */}
            <div className="mt-1">
              <p className="text-sm text-gray-400">Jul 2019 - Jan 2022</p>
              <h4 className="text-xl font-semibold mt-1">System Engineer</h4>
              <p className="text-sm text-blue-400">Tata Consultancy Services</p>
            </div>
          </div>

          {/* Entry 3 */}
          <div className="flex-1 text-center relative pt-12">
            {/* Marker dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
            {/* Content */}
            <div className="mt-1">
              <p className="text-sm text-gray-400">Jan 2022 - Jan 2023</p>
              <h4 className="text-xl font-semibold mt-1">Senior Analyst</h4>
              <p className="text-sm text-blue-400">Tiger Analytics</p>
            </div>
          </div>

          {/* Entry 4 */}
          <div className="flex-1 text-center relative pt-12">
            {/* Marker dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
            {/* Content */}
            <div className="mt-1">
              <p className="text-sm text-gray-400">Jan 2023 - Jan 2025</p>
              <h4 className="text-xl font-semibold mt-1">Data Scientist</h4>
              <p className="text-sm text-blue-400">Tiger Analytics</p>
            </div>
          </div>

          {/* Entry 5 */}
          <div className="flex-1 text-center relative pt-12">
            {/* Marker dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"></div>
            {/* Content */}
            <div className="mt-1">
              <p className="text-sm text-gray-400">Jan 2025 - Present</p>
              <h4 className="text-xl font-semibold mt-1">Senior Data Scientist</h4>
              <p className="text-sm text-green-400">Tiger Analytics</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project: Data Genie */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold text-green-400 mb-2">Data Genie</h4>
          <p className="text-gray-400 text-sm mb-4">
            Agentic AI based context-aware chatbot powered with Claude Models to aid users dig into data deeper and faster. 
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded-full">GenAI</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Agentic AI</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">RAG</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Streamlit</span>
          </div>
          <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
            View Project →
          </a>
        </div>

        {/* Project: TechInsights Pro */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold text-green-400 mb-2">TechInsights Pro</h4>
          <p className="text-gray-400 text-sm mb-4">
            An intelligent tool that scores and segments device users and generates recommendations given their interaction.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded-full">Segmentation</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">LLMs</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Statistics</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Python</span>
          </div>
          <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
            View Project →
          </a>
        </div>

        {/* Project: BugLink */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold text-green-400 mb-2">Bug Link</h4>
          <p className="text-gray-400 text-sm mb-4">
            AI-powered suite of tools enabling engineers to resolve bugs and enhance products with greater speed and efficiency.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded-full">NLP</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Python</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">DevOps</span>
          </div>
          <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
            View Project →
          </a>
        </div>

        {/* Project: Enviro Flow */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold text-green-400 mb-2">EnvrioFlow</h4>
          <p className="text-gray-400 text-sm mb-4">
            An intelligent tool that simulates various scenarios in a supply chain to identify the optimal settings for maximizing profit.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded-full">Optimization</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Machine Learning</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Python</span>
          </div>
          <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
            View Project →
          </a>
        </div>
        
        {/* Project: Stegancryption */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold text-green-400 mb-2">Stegancryption</h4>
          <p className="text-gray-400 text-sm mb-4">
            Platform to transfer information securely using a combination of Cryptography, Steganography and Facial Recognition.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-700 px-2 py-1 rounded-full">Computer Vision</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">Encryption Techniques</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">AI</span>
          </div>
          <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:underline">
            View Project →
          </a>
        </div>
      </div>
    </section>

    {/* Publications */}
    <section id="publications" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold mb-8 text-center">Publications</h3>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <AcademicCapIcon className="h-16 w-16 text-blue-400" />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-green-400">
            "Encrypted Transfer of Confidential Information Using Steganography and Identity Verification Using Face Data"
          </h4>
          <p className="text-gray-400 text-sm italic mt-1">
            Artificial Intelligence and Evolutionary Computations in Engineering Systems, Vol. 1056, pp. 155–166 (2020)
          </p>
          <p className="text-gray-300 text-sm mt-2">
            <span className="font-semibold">Abstract:</span> Information security has become a significant part of data communication. In order to address this crucial point in data communication to secure the confidential data, steganography and cryptography can be combined to give better results. Steganography is a practice to hide any confidential or sensitive information into another information that plays as the cover for the information, adding a layer of security on top of science of secret writing, known as cryptography. In this paper, we discuss an improved LSB steganography technique to optimize the algorithm hiding the bits in different channels selected dynamically using key. We further propose a platform leveraging cryptographic algorithms and verification using face data in pipeline to help keep data more secure.
          </p>
          <a
            href="https://link.springer.com/chapter/10.1007/978-981-15-0199-9_14"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-blue-300 hover:underline"
          >
            View Publication →
          </a>
        </div>
      </div>
    </section>

    {/* Contact */}

    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold mb-12 text-center">Get in Touch</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        {/* Email */}
        <a
          href="mailto:ag.parth11@gmail.com"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition transform hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4.74l-8 5.34-8-5.34V6h16v2.74zM4 18h16V8.74l-8 5.34-8-5.34V18z" />
          </svg>
          <span className="font-semibold">Email</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/parth-11/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition transform hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="font-semibold">LinkedIn</span>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/falcolf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition transform hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.49.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.312.465-2.383 1.235-3.221-.124-.3-.538-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.97-.399 2.98-.399s2.023.133 2.98.399c2.293-1.552 3.3-1.23 3.3-1.23.655 1.653.241 2.876.118 3.176.77.838 1.233 1.909 1.233 3.221 0 4.609-2.802 5.621-5.476 5.92-.42.365-.823 1.102-.823 2.222v3.293c0 .319.192.602.8.577 4.769-1.587 8.2-6.085 8.2-11.387 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-semibold">GitHub</span>
        </a>
      </div>
    </section>

    <footer className="bg-black/50 text-gray-400 py-6 text-center text-sm">
      © {new Date().getFullYear()} Parth Agarwal
    </footer>
    </div>
  );
}
