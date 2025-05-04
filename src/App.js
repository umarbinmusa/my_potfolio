import Nav from "./component/Nav";

import "./App.css";


function App() {
  return (
    <div class=" overflow-hidden min-h-screen m-20 p-10 lg:shadow-black rounded-2xl bg-slate-950">
      <Nav />

      <div class="flex flex-col lg:flex-row">
        <div class="m-20 text-center lg:text-left">
          <h1 class="font-black fo text-white  text-3xl lg:text-6xl">
            Hi Am Umar Musa
            <br />
            <h1 class="text-indigo-500">MENN Stack Developer</h1>
          </h1>
         
          <p class="mt-5 text-xl text-justify text-white">
          I'm a software engineer based in Kaduna, Nigeria. I focus on the best experience, while balancing the needs of business and pixels, perfection to create digital products.
          I specialize in building exceptional websites, applications, and everything related to it.
          
          
          </p>
          
          <button class="bg-transparent hover:bg-blue-500 mt-14 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
           Hire Me
          </button>
         <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Let's Talk
          </button>
        </div>
        <div className=" m-20 p-10  sm:mt-15">
          <img src="./images/git_pic.png" className=" rounded-full " alt="" />
        </div>
        
        
      </div>
    
      <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] ml-20 border-blue-500 p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] ml-20 border-blue-500 p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
           
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] ml-20 border-blue-500 p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
           
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] ml-20 border-blue-500 p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
           
           
        

    </div>
  );
}

export default App;
