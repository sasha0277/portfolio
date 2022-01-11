 // import { GetStaticPropsContext } from 'next';
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";



export default function Home({endpoint}) {
  console.log(endpoint);
  return (
    <motion.div
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"

 className="flex flex-col flex-grow px-6 pt-1">

    <Head>
      <title>Web Developer | Portfolio | Sunny</title>
    </Head>

      <h5 className="my-1 font-medium">
        I have completed my Web development from Erhvervsakademi Sjælland .My
        skills include HTML/CSS/Sass, Java,JavaScript , React.JS & SQL Server
        Database,Core PHP, MVC Frameworks and jQuery programming languages.
      </h5>

      <div
        className="flex-grow p-3 my-1 bg-gray-400 dark:bg-dark-100 rounded"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
          marginBottom: "-0.1rem",
        }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">
          What I am good at
        </h6>

        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map((service) => (
            <motion.div 

            variants={fadeInUp}
           



            className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 md:col-span-1 col-span-2 p-2" key={service.title}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}


//called every time the page refreshed
export const getServerSideProps= async(
  context:GetServerSidePropsContext
  )=>{

//  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//  const data = await res.json()
// console.log(data);

  //  return{props:{services: data.services}}
   return { props:{ endpoint: process.env.VERCEL_URL}};
    

}

// called only during the build of project
// export const getStaticProps= async(context:GetStaticPropsContext)=>{

//  const res = await fetch('http://localhost:3000/api/services')
//  const data = await res.json()
// console.log('SERVER',services);

//    return(
// {
//   props:{
//     services: data.services,
//   }
// }

//   )

// }
