import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SkillProgress(p) {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progressValue < p.value) {
                setProgressValue(prev => Math.min(prev + 1, p.value));
            } else {
                clearInterval(timer);
            }
        }, 10);
        return () => clearInterval(timer);
    }, [p.value, progressValue]);

    return (
        <div className='flex flex-row gap-4 my-2 p-2'>
            <Image src={p.icon} className='invert' alt={p.language} width={45} height={45} />
            <div className="flex-row">
                <h2 className='text-base text-white inter'>{p.language}</h2>
                <progress
                    className="progress w-56 rounded-md transition-all duration-1000 ease-out"
                    value={progressValue}
                    max="100"
                />
                {/* <span className='px-2 align-middle text-white'>{progressValue}%</span> */}
            </div>
        </div>
    );
}
