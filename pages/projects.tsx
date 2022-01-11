import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { fadeInUp, stagger } from '../animations';
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { routeAnimation } from './../animations';


const Projects = () => {

    const [projects, setProjects] = useState(projectsData);

    const [active, setActive] = useState('all');

    const [showDetail,setShowDetail] = useState<number|null>( null);

    const handleFilterCategory =(category: Category | 'all') => {

        if(category === 'all'){
            setProjects(projectsData);
            setActive(category);
            return;
        }

         const newArray =projectsData.filter(project => project.category.includes(category));

         setProjects(newArray);
         setActive(category);


    }

    return (
        <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        
        className="p-4 overflow-y-scroll" style={{ height:'75vh' }}>

<Head>
      <title>Web Developer | Projects | Sunny</title>
    </Head>

             <ProjectNavBar handleFilterCategory={handleFilterCategory} active={active}/>
            <motion.div
            variants={stagger }
            initial="initial"
            animate="animate"
            className="relative grid grid-cols-12 gap-4 my-3">
                {
                    projects.map((project) =>(
                        <motion.div
                        
                        variants={fadeInUp}
                        key={project.name}
                        
                        className="col-span-12 p-2 bg-gray-300 sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>

                    ))

                }
            </motion.div>
           
            
        </motion.div>
    )
}

export default Projects
