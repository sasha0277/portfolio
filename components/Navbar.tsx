import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";



const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({ activeItem, setActiveItem, name, route})=>{
    return(
        
            activeItem !== name ? (
            <Link href={route}>
              <a>
                <span className="hover:text-green" onClick={()=>setActiveItem(name)}>{name}</span>
              </a>
            </Link>
          ):null
        
    )
}


const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

   const {pathname}=useRouter();

  useEffect(()=>{

    if(pathname==='/'){
        setActiveItem('About');
    }
    
    if(pathname==='/projects'){
        setActiveItem('Projects');
    }
    
    if(pathname==='/resume'){
        setActiveItem('Resume');
    }
    



      
  },[])
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-2 text-green border-green md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg ">

          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume"/>
        

        {/* {activeItem !== "Projects" && (
          <Link href="/projects">
            <a>
              <span onClick={()=>setActiveItem('Projects')}>Projects</span>
            </a>
          </Link>
        )}

        {activeItem !== "Resume" && (
          <Link href="/resume">
            <a>
              <span onClick={()=>setActiveItem('Resume')}>Resume</span>
            </a>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
