import InformationIcon from '/public/assets/svg/information.svg';
import Image from 'next/image';

export default function AboutContent() {
    const actualDate = new Date();

    let age = actualDate.getFullYear() - 2006;

    if (actualDate.getMonth() + 1 < 10 || (actualDate.getMonth() + 1 === 10 && actualDate.getDate() < 23)) {
        age--;
    }

    return (
        <div>
            <div className='flex h-7 mb-3'>
                <Image className='invert align-middle mr-2 select-none' src={InformationIcon} alt="Icon" width={28} height={28} />
                <h1 className="text-xl text-white pb-3 align-middle select-none">Sobre Mim</h1>
            </div>
            <p className="text-justify text-lg w-[95%] text-white">
                Eu sou Iago Fragnan, desenvolvedor autodidata de {age} anos, nascido em 23 de outubro de 2006, desde cedo fascinado pelo mundo da informática. Sempre me perguntei como programas, sistemas e jogos eram criados e funcionavam por trás, o que despertou uma curiosidade que se transformou na paixão que guia minha jornada profissional até hoje.<br />
                <br />
                Desde então, dediquei minha vida ao aprendizado e ao desenvolvimento, transformando aquela curiosidade em projetos reais. Hoje com experiência em PHP, C#, Java e outras linguagens de programação, aplico meu conhecimento para construir sistemas que tendem a resolver problemas e otimizar processos. Durante minha formação em Análise e Desenvolvimento de Sistemas pela ETEC Joaquim Ferreira do Amaral, participei de projetos que ajudaram a evoluir muito minhas habilidades.<br />
                <br />
                Minha paixão pela vontade de aprender constantemente me levou a aprender sozinho ferramentas e linguagens de programação. A tecnologia, para mim, é mais do que um trabalho; é uma forma de transformar ideias em realidade e de continuar explorando o que me fascina desde a infância.
            </p>

        </div>
    );
}