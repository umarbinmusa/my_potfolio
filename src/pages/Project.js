import Nav from "../component/Nav";
function project(){
    return(
        <div className=" items-center min-h-screen m-20 px-10 bg-slate-950">
             <Nav />
            <div className="flex flex-row space-x-16">
                <div className=" bg-white rounded-md"> 
                <img src="./images/azandash.png" className="p-5" alt="" />
                <div className="flex flex-row space-x-14 py-2">
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Github
          </button>
        
                    </div>
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Live
          </button>
        
                        </div>
                </div>
        
                </div>
                <div className=" bg-white rounded-md"> 
                <img src="./images/dashbord.png" className="p-5" alt="" />
                <div className="flex flex-row space-x-14 py-2">
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Github
          </button>
        
                    </div>
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Live
          </button>
        
                        </div>
                </div>
        
                </div>
                <div className=" bg-white rounded-md"> 
                <img src="./images/mbjj.png" className="p-5" alt="" />
                <div className="flex flex-row space-x-14 py-2">
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Github
          </button>
        
                    </div>
                    <div className="">
                    <button class="bg-transparent hover:bg-blue- ml-3 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Live
          </button>
        
                        </div>
                </div>
        
                </div>
               
               

            </div>

        </div>

    );
}
export default project;