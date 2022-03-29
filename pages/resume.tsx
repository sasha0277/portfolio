import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp } from '../animations';
import Bar from '../components/Bar';
import { languages } from '../data';
import { routeAnimation } from './../animations';
import { tools } from './../data';

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="px-6 py-2"
    >
      <Head>
        <title>Web Developer | Resume | Sonny</title>
      </Head>
      {/* education and experience */}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          exit="exit"
        >
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelor In Web Development
            </h5>
            <p className="font-semibold">Erhvervsakademi</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend Web Developer</h5>
            <p className="font-semibold">2.5 years Experience</p>
          </div>
        </motion.div>
      </div>

      {/* language and tools  */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold"> Languages & Frameworks </h5>
          <div className="my-2 ">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold"> Tools & Softwares </h5>
          <div className="my-2 ">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
