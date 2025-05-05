import Nav from "../component/Nav";

import "../App.css";


function Home() {
  return (
    <div class="overflow-hidden min-h-screen m-20 p-10 lg:shadow-black rounded-2xl bg-slate-950">
      <Nav />
      <vr></vr>

      <div class="flex flex-col lg:flex-row">
        <div class="m-20 text-center lg:text-left">
          <h1 class="font-black fo text-white  text-3xl lg:text-6xl">
            Hi Am Umar Musa
            <br />
            <h1 class="text-indigo-500">MENN Stack Developer</h1>
          </h1>
         
          <p class="mt-5 text-xl lg:text-justify-center text-white">
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
        <div className=" m-20 p-10  sm:mt-15 border-dotted border-2 rounded-full">
          <img src="./images/git.png" className=" rounded-full border-solidborder-spacing-8 border-2 border-indigo-500" alt="" />
        </div>
        
        
      </div>
      <div className="flex flex-row ml-20 space-x-3">
        <div>
    
      <a href="https://twitter.com/" target="_blank">
      <img src="./images/icons8-github-50.png" className="" alt="" />

              </a>
              </div>
              <div>
            <a href="https://twitter.com/" target="_blank">
            <img src="./images/icons8-whatsapp-50.png" className=" " alt="" />

              </a>
              </div>
           
            <a href="https://twitter.com/" target="_blank">
            <img src="./images/icons8-x-50.png" className="" alt="" />

               </a>
           
            <a href="https://twitter.com/" target="_blank">
            <img src="./images/icons8-linkedin-48.png" className="" alt="" />

              
            </a>
           
            </div>
        

    </div>
  );
}

export default Home;
