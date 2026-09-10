import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wer ich bin</p>
        <h2 className={styles.sectionHeadText}>Über mich.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Ich bin Computer Engineer mit Schwerpunkt auf der Entwicklung von 
        Backend-Anwendungen mit C# und .NET. Dabei entwickle ich RESTful APIs 
        und Webanwendungen mit ASP.NET Core und Entity Framework Core und lege 
        besonderen Wert auf eine saubere, wartbare und gut strukturierte Architektur.
        <br/>
        <br/>
        Beruflich arbeite ich mit Oracle-Datenbanken und Linux-basierten 
        Systemen und beschäftige mich insbesondere mit Datenbankadministration 
        und der Automatisierung von Datenbankprozessen. Dadurch verfüge ich über eine 
        solide Grundlage in den Bereichen Datenbanken, Backend-Systeme und Enterprise-IT.
        <br/>
        <br/>

        Neben meiner beruflichen Tätigkeit entwickle ich Spiele mit Unity und C#, 
        erstelle 3D-Umgebungen mit Blender und dokumentiere meine Projekte 
        durch Content Creation.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");