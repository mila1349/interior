import { motion } from "framer-motion";
import React, {useState} from "react";

const item = {
  visible: (i) => {
    return {
      rotateY: -0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        ease: "easeInOut"
        // type: 'spring',
        // mass: 0.1,
        // stiffness: 50,
        // damping: 300
      }
    };
  },
  hidden: {
    rotateY: 90,
    x: 30,
    opacity: 0,
    scale: 0.8
  }
};

function check(x, index, control){
    if(x===" "){
        return "\u0020"
    }else if (x===":"){
        return <br/>
    }else{
        return(
           <Span 
                x={x} 
                index={index}
                control={control}
            /> 
        )
        
    }
}

function Span({x, index, control}){
    return(
        <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={control ? "visible" : "hidden"}
            variants={item}
            className="text-item"
          >
            {x}
          </motion.span>
    )
}

function Text({ text, start }) {
   const [control, setControl] = useState(false)

  return (
    <motion.div
        whileInView={()=>setControl(true)}
        viewport={{ once: true }}
    >
      {text.split("").map((x, index) =>
        check(x, index, start!==undefined?start:control)
      )}
    </motion.div>
  );
}

export default Text;
