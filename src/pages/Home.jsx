import Veggie from "../components/Veggie";
import Populer from "../components/Populer";
import {motion} from 'framer-motion';


import React from 'react'

function Home() {
  return (
    <motion.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    ezit={{opacity:0}}
    transition={{duration:0.5}}>
      <Veggie/>
      <Populer/>
    </motion.div>
  )
}

export default Home
