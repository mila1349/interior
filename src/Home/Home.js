import React, { useEffect, useState} from 'react';
import './style.scss'
import ImgHover from './ImgHover';
import Navbar from '../Navbar';
import {motion} from 'framer-motion'
import Text from '../effects/Text';

const dataImg = [
    {img:"images/furniture1.jpg", btnColor:'#232323', navColor:'#232323', 
        style:{
            width:'25vw',
            height:'80vh',
            top:'50%',
            left:'10%',
            transform:'translate(-10%,-50%)',
            backgroundImage: "url(images/furniture1.jpg)"
        },
        initial:{
            top:'-100vh',
            left:'-10%',
        }},
    {img:"images/furniture5.jpg", btnColor:'#936543', navColor:'#936543', 
        style:{
            width:'25vw',
            height:'80vh',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            backgroundImage: "url(images/furniture5.jpg)"
        },
        initial:{
            top:'100vh',
            left:'50%',
        }},
    {img:"images/furniture4.jpg", btnColor:'#937562', navColor:'#937562', 
        style:{
            width:'25vw',
            height:'80vh',
            top:'50%',
            right:'10%',
            transform:'translate(10%,-50%)',
            backgroundImage: "url(images/furniture4.jpg)"
        },
        initial:{
            top:'-100vh',
            right:'10%',
        }}
]

function Home() {
    const [isHover, setIsHover] = useState(0)
    const [top, setTop] = useState(1)
    const [cursorXY, setCursorXY] = useState({ x:0, y:0 })
    const [color, setColor] = useState({button:'', nav:''})
    const [pulse, setPulse] = useState({pulse1:false, pulse2:false})
    
    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX ;
            const y = e.clientY ;
            setCursorXY({ x, y })
        }
        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    useEffect(()=>{
        const x = isHover-1
        for (let index = 0; index < dataImg.length; index++) {
            if(x===index){
                setColor({button:dataImg[x].btnColor, nav:dataImg[x].navColor})
            }else if(x===-1){
                setColor({...color, nav:'#B7B7A4'})
            }
        }
    },[isHover])
    
    return <div className='home'>
        <Navbar 
            color={color}
            start={pulse.pulse2}
        />

        <div className="go" style={{top:`${cursorXY.y}px`, left:`${cursorXY.x}px`, display:isHover!==0?'flex':'none', background:color.button}}>
          <img src="images/arow.png" alt=""/>
        </div>

        <div className="text">
            <h1>
                <Text text="Modern Interior:For Your Home" start={pulse.pulse2}/>
            </h1>
            <motion.div className="btn-home"
                initial={{opacity:0}}
                animate={pulse.pulse2&&{opacity:1}}
            >
                <h3>See More</h3>
                <img src="images/arow.png" alt="" />
            </motion.div>
        </div>

      <motion.div className="interior-container"
      >
          {
              dataImg.map((item, index)=>(
                  <ImgHover 
                    setIsHover={setIsHover}
                    isHover={isHover}
                    index={index+1}
                    dataImg={item}
                    top={top}
                    setTop={setTop}
                    pulse={pulse}
                    setPulse={setPulse}
                  />
              ))
          }
      </motion.div>
    </div>;
}

export default Home;
