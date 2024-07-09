import { ClientImg } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='mx-auto'>
        <div className='flex overflow-x-hidden side-gradient'>
        <motion.div 
        initial={{x:0}}
        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
        animate={{x: "-100%"}}
        className='flex flex-shrink-0 overflow-x-hidden'>
            {ClientImg.map((image,index)=>{
                return <img className='py-[80px] w-56 pr-20' src={image.image} key={index} alt="" />
            })}
        </motion.div>
        <motion.div 
        initial={{x:0}}
        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
        animate={{x: "-100%"}}
        className='flex flex-shrink-0  overflow-x-hidden'>
            {ClientImg.map((image,index)=>{
                return <img className='py-[80px] w-56 pr-20' src={image.image} key={index} alt="" />
            })}
        </motion.div>
        </div>
    </div>
  )
}

export default Marquee