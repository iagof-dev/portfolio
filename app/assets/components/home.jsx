'use client'

import { useState } from "react";

import IFHeader from "./header";
import AboutBox from "./AboutBox/about";
import ContentBox from "./content";

export default function IFHome() {

    const [page, setPage] = useState(0);
    

    return (
        <div>
            <div className="pt-5 h-full">
                <IFHeader setPage={setPage} />
            </div>
            <div className="flex pt-6 w-screen h-full justify-center bg-[#101010]">
                <AboutBox />
                <ContentBox IndexPage={page}/>
            </div>
        </div>
    );
}