import React from 'react'
import {motion} from 'framer-motion'
import Text from '../effects/Text'
import TextSlideUp from '../effects/TextSlideUp'

function Designers() {
  return (
    <div className='designers'>
        <motion.div className="designer"
            whileHover={{
                opacity:1
            }}
        >
            <div className="photo">
                <h1>
                    <Text text="01" />
                </h1>
                <img src="images/designer1.png" alt="" />
            </div>
            <h3>
                Tanner Hatfield
            </h3>
        </motion.div>

        <motion.div className="designer"
            whileHover={{
                opacity:1
            }}
        >
            <div className="photo">
                <h1>
                    <Text text="02" />
                </h1>
                <img src="images/designer2.png" alt="" />
            </div>
            <h3>Jayce Schroeder</h3>
        </motion.div>

        <motion.div className="designer"
            whileHover={{
                opacity:1
            }}
        >
            <div className="photo">
                <h1>
                    <Text text="03" />
                </h1>
                <img src="images/designer3.png" alt="" />
            </div>
            <h3>Nikodem Olsen</h3>
        </motion.div>

        {/* <Text text="Meet the designers"/> */}
        <h1>Meet the designers</h1>

    </div>
  )
}

export default Designers