import { motion } from 'framer-motion';
import { FunctionComponent } from "react";
import { fadeInUp } from '../animations';
import { IService } from './../type';


const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon,about,title},
}) => {



    const createMarkup = ()=>{
        return{ 
            __html:about,
        }
    }
    return (
        <motion.div className="flex items-center p-2 space-x-4"
        
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        
        >
            <Icon className="w-12 h-12 text-green"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
            
        </motion.div>
    )
}

export default ServiceCard