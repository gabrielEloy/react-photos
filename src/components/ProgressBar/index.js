import React from 'react'
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    
    return url 
    ? null
    : <motion.div 
        className="progress-bar" 
        initial={{width: 0}}
        animate={{width: `${progress}%`}}
    />
}

export default ProgressBar
