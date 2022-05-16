import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const variants = {
  hidden: { 
    top:-300,
    left:-300,
    opacity:0,
    zIndex:100 },
  initView:{
    top:'100vh',
    left:'100vw',
    opacity:0
  }
}

function List() {
  const [view, setView] = useState(false)
  const [exit, setExit] = useState(null)
  const [data, setData] = useState([
    {
      pos:0,
      img:"images/stuff2.jpg",
      desc:"Lorem ipsum dolor sit amet, cras varius.  Faucibus quam enim sociis lectus dictum enim,  Odio aliquet fames tellus ultricies leo cras varius.  Faucibus quam enim sociis lectus dictum enim"
    },
    {
      pos:1,
      img:"images/stuff3.jpg",
      desc:"Lorem ipsum dolor sit amet, cras varius.  Faucibus quam enim sociis lectus dictum enim,  Odio aliquet fames tellus ultricies leo cras varius.  Faucibus quam enim sociis lectus dictum enim"
    },
    {
      pos:2,
      img:"images/stuff4.jpg",
      desc:"Lorem ipsum dolor sit amet, cras varius.  Faucibus quam enim sociis lectus dictum enim,  Odio aliquet fames tellus ultricies leo cras varius.  Faucibus quam enim sociis lectus dictum enim"
    },
  ])

  const getOpacity = (index) =>{
    if(index===0){
      return '100%'
    }else if(index>0){
      return `${20-((index-1)*10)}%`
    }
  }

  function prev(){
    if(!exit){
      const added = data.pop()
      setData([added, ...data])
    }else{
      setExit(false)
    }
  }

  function next(){
    if(exit){
      const hilang = data.shift()
      setData([...data, hilang])
    }else{
      setExit(true)
    }
  }

  useEffect(()=>{
    if(exit===false){
      prev()
    }else if(exit){
      next()
    }
  },[exit])

  return (
    <motion.div className='list' 
      whileInView={()=>setView(true)}
      viewport={{margin:'-50%', once:true}}
    >
            <motion.div className="description" 
            initial={{x:'-1000px'}}
            animate={view&&{x:0}}
            transition={{duration:0.5}}
            >
          
          <motion.span
          >
            <h1>Furniture</h1>
            <h3>Lorem ipsum dolor sit amet, cras varius.  Faucibus quam enim sociis lectus dictum enim,  Odio aliquet fames tellus ultricies leo cras varius.  Faucibus quam enim sociis lectus dictum enim</h3>
          </motion.span>

          <span>
            <h2>CLASSY & ELEGANT</h2>
            <div className="btn-container">
              <div className="btn" onClick={()=>prev()} >
                <img src="images/arrow2.png" alt="" />
              </div>
              <div className="btn" onClick={()=>next()} >
                <img src="images/arow.png" alt="" />
              </div>
            </div>
          </span>
        </motion.div>

        <div className="img-container" data-scroll data-scroll-speed="-2" >
          {
            data.map((item, index)=>(
              <AnimatePresence>
                <motion.img src={item.img} alt="" 
                    key={item.pos}
                    variants={variants}
                    style={{
                        top:`${index*7}%`,
                        left:`${index*5}%`,
                        zIndex:0+(data.length-index),
                        opacity:getOpacity(index)
                    }}
                    initial={exit===null?"initView":!exit&&data[0].pos===item.pos&&"hidden"}
                    animate={view&&!exit?{
                      top:`${index*7}%`,
                      left:`${index*5}%`,
                      zIndex:0+(data.length-index),
                      opacity:getOpacity(index),
                    }:{}}
                    exit={exit&&"hidden"}
                    transition={exit===null?{
                      duration:0.2,
                      delay:0.5*(data.length-index-1),
                    }:{duration:0.2,}}
                    
                />
              </AnimatePresence>
            ))
          }
        </div>
    </motion.div>
  )
}

export default List