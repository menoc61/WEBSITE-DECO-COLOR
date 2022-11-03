import React,{ useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { ForUrl, client } from '../../client'

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import CarouselContainer from '../../components/Carousel/CarouselContainer'
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
// const [ banner, setBanner ] = useState([]);
// useEffect(() => {
//   const query = '*[_type == "header"]';
//   client.fetch(query).then((data) => setBanner(data))
// },[])
const Header = () => (



<>
  <CarouselContainer/>
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Matt Rodrigue</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">PRG Deco'color</p>
          <p className="p-text"><small>since 2016</small></p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle" />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.idea, images.create, images.delivery].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div></>
);

export default AppWrap(Header, 'home');
