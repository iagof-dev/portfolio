'use client'
import HeaderItem from "./Header/HeaderItem";
// import HeaderButton from "./elements/HeaderButton";
import { motion } from "framer-motion";
import { useState } from "react";


export default function ifHeader(p) {

    return (
        <>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} 
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 30,
                }}
            >
                <div className="z-10 sticky top-4">
                    <div className="bg-[#232323] w-fit h-auto rounded-3xl py-5 px-12 mx-auto flex gap-2">
                        <HeaderItem id="0" text="sobre" setPage={p.setPage} />
                        <HeaderItem id="1" text="habilidades" setPage={p.setPage}  />
                        <HeaderItem id="2" text="carreira" setPage={p.setPage} />
                        <HeaderItem id="3" text="projetos" setPage={p.setPage} />
                        {/* <HeaderButton text="Baixar" link="#" /> */}
                    </div>
                </div>
            </motion.div>
        </>
    );
}