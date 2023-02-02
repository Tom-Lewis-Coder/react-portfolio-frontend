import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                    <motion.li
                        whileHover={{ scale: 1.25 }}
                        transition={{ type: 'easeOut' }}
                        className='app__flex p-text'
                        key={`link-${item}`}
                    >
                        {/* <div /> */}
                        <a href={`#${item}`} >{item}</a>
                    </motion.li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(!toggle)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [200, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul className='app__navbar-links'>
                            {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                                <motion.li
                                    whileHover={{ scale: 1.25 }}
                                    transition={{ type: 'easeOut' }}
                                    key={item} >
                                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
            <div className='app__navbar-logo'>
                <img src={images.tsllogo} alt='logo' ></img>
            </div>
        </nav>
    )
}

export default Navbar