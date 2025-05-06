export default function Nav() {
    return (
      

<nav class=" ">
  <div class=" flex w-full shadow-md  items-center justify-between">
   <h1 className="text-white  text-xl ml-10"> <img src="./images/git.png" className=" rounded-full w-20 border-4 border-white" alt="" />
   </h1>
   
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 b  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  0 md:dark:bg-gray-900 dark:border-gray-700">
        
    
        <li>
          <a href="#" class="block py-2 px-3 text-2xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-2xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Expirience</a>
        </li>
        <li>
          <a href="/project" class="block py-2 px-3 text-2xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Project</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1RyaPmat7v-bDGGwdDKb2w90RHWJ-RFF3/view?usp=sharing" class="block py-2 px-3 text-2xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
  