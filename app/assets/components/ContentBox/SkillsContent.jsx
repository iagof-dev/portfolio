import Image from 'next/image';

import SkillProgress from './elements/SkillProgress';

import SkillsIcon from '/public/assets/svg/lightbulb.svg';
import PhpIcon from '/public/assets/svg/languages/php.svg';
import CsharpIcon from '/public/assets/svg/languages/csharp2.svg';
import FlutterIcon from '/public/assets/svg/languages/flutter.svg';
import PythonIcon from '/public/assets/svg/languages/python.svg';
import MySqlIcon from '/public/assets/svg/languages/mysql.svg';
import JavaIcon from '/public/assets/svg/languages/java.svg';
import ReactIcon from '/public/assets/svg/languages/react.svg';
import AwsIcon from '/public/assets/svg/languages/aws.svg';
import GitIcon from '/public/assets/svg/languages/git.svg';
import CppIcon from '/public/assets/svg/languages/cpp.svg';
import TailwindIcon from '/public/assets/svg/languages/tailwind.svg';
import JavaScriptIcon from '/public/assets/svg/languages/javascript2.svg';


export default function SkillsContent() {
    return (
        <div>
            <div className='flex h-7 mb-3'>
                <Image className='invert align-middle mr-2 select-none' src={SkillsIcon} alt="Icon" width={28} height={2830} />
                <h1 className='text-xl text-white select-none'>Habilidades</h1>
            </div>
            <div className='grid grid-cols-3 grid-rows-5 p-4'>

                <SkillProgress icon={PhpIcon} language="PHP / Laravel" value="78" />
                <SkillProgress icon={CsharpIcon} language="C# (.NET)" value="70" />
                <SkillProgress icon={FlutterIcon} language="Flutter" value="35" />
                <SkillProgress icon={PythonIcon} language="Python" value="68" />
                <SkillProgress icon={MySqlIcon} language="MySQL / MariaDB" value="89" />
                <SkillProgress icon={JavaIcon} language="Java" value="65" />
                <SkillProgress icon={ReactIcon} language="React" value="12" />
                <SkillProgress icon={AwsIcon} language="Amazon Web Services" value="10" />
                <SkillProgress icon={GitIcon} language="Git" value="60" />
                <SkillProgress icon={CppIcon} language="C++" value="6" />
                <SkillProgress icon={TailwindIcon} language="Tailwind" value="55" />
                <SkillProgress icon={JavaScriptIcon} language="JavaScript" value="72" />
              
            </div>
        </div>


    );
}
