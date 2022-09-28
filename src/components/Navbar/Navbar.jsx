import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion' 
import { images } from '../../constants'

function Navbar() {
  return (
    <div>
        Navbar
        <img src={images.about01} alt="about1" />
    </div>
  )
}

export default Navbar