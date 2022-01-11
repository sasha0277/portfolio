import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTiedScroll } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';





const Sidebar = () => {

    const{theme, setTheme} = useTheme();

    const changeTheme=()=>{
        setTheme(theme==='light'?'dark':'light');
    }



    return (
        <div>

           
            <img src="images/Sunny.jpg" alt=" Sunny" className="w-32 h-32 mx-auto rounded-full"/>
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan ">
                <span className="text-2xl">Sunny Sharma </span>
                
                </h3>
                <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"> Web Developer</p>
                <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 cursor-pointer" href="/assets/Resume.pdf" download="Resume.pdf" > <GiTiedScroll className="w-4 h-4 m-2 "/> Download Resume</a>
                 
                {/* social icons  */}
                <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                    <a href="http://">
                        <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="">
                        <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
                    </a>
                    <a href="http://">
                        <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                    </a>
                </div>

                {/* address */}
                <div className="py-1 my-1 bg-gray-200 dark:bg-dark-200 " style={{ marginLeft:'-1rem', marginRight:'-1rem' }}>
                    <div className="flex items-center justify-center space-x-2">
                        <GoLocation/>
                        <span>Copenhagen ,Denmark</span>
                    </div>
                    <p className="my-2 ">sasha0277@yahoo.com</p>
                    <p className="my-2 ">+45-42515197</p>
                </div>

                {/* Email button */}

                <button  onClick={()=>window.open('mailto:sasha0277@yahoo.com')}   className="w-8/12 px-3 py-2 my-1 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email Me</button>
                <button  onClick={changeTheme} className="w-8/12 px-3 py-2 my-1 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Toggle Theme</button>

            
        </div>
    )
}

export default Sidebar

