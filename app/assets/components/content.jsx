'use client'

import { motion } from "framer-motion";

import AboutContent from "./ContentBox/AboutContent";
import CarrerContent from "./ContentBox/CarrerContent";
import ProjectsContent from "./ContentBox/ProjectsContent";
import SkillsContent from "./ContentBox/SkillsContent";


export default function ContentBox(p) {

    let content;

    switch (p.IndexPage) {
        default:
        case '0':
            content = <AboutContent />;
            break;
        case '1':
            content = <SkillsContent />;
            break;
        case '2':
            content = <CarrerContent />;
            break;
        case '3':
            content = <ProjectsContent />;
            break;
    }


    return (
        <motion.div
            initial={{ x: '100vw', opacity: 0 }} // Inicia fora da tela à direita
            animate={{ x: 0, opacity: 1 }} // Anima para a posição normal
            transition={{
                duration: 1,
                type: 'spring',
                stiffness: 30,
            }}
        >
            <div className="bg-[#202020] border p-4 border-[#505050] border-opacity-50 w-[75rem] ml-5 rounded-lg drop-shadow-lg">
                {content}
            </div>
        </motion.div>
    );
}