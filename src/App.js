import { useEffect, useState } from "react";
import Navbar from "./components/common/commonComponents/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/commonComponents/Footer";

import gsap from "gsap";
import Layout from "./components/Layout";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[])


  return (
    <>

    <div id="appCom" className= {`min-h-screen w-full overflow-x-hidden relative  ${theme === "dark" ? "dark bg-black  text-opacity-90" : "light "}`}>

        <div className={`bg-[#fbe2e3] ${theme === "dark" ? "absolute" : "fixed"} top-[-6rem] z-0 right-[11rem] h-[20rem] w-[31.25rem]  rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2d3d5c]`}></div>
        <div className={`bg-[#dbd7fb] ${theme === "dark" ? "hidden" : "fixed"} top-[-1rem] z-0 left-[-35rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946371]`}></div>

       
       
      {/* <Layout style={{ zIndex: -9999999 }}></Layout> */}
      <Navbar theme={theme} setTheme={setTheme} style={{ zIndex: -9999999 }}/>
      
      <HomePage/>
      <Footer/>
     

    </div>

    </>
  );
}

export default App;
