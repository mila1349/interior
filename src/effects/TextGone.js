import { motion } from "framer-motion";
import React, {useState} from "react";

function TextGone({ text }) {
  
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

  const item = {
    hidden:{
        rotateY: -0,
        x: 0,
        scale: 1,
        opacity: 1,
    },
    visible: (i) => {
      return{
        rotateY: 90,
        x: 30,
        opacity: 0,
        scale: 0.8,
        transition: {
          delay: 0.08*(text.split("").length-i-1),
          ease: "easeOut"
        }
      }
    }
  };
   const [control, setControl] = useState(false)

  return (
    <motion.div
        whileInView={()=>setControl(true)}
        viewport={{ once: true }}
    >
      {text.split("").map((x, index) =>
        check(x, index, control)
      )}
    </motion.div>
  );
}

export default TextGone;
