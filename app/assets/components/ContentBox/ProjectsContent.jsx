import Image from 'next/image';

import ProjectsIcon from '/public/assets/svg/projects.svg';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CardCarousel from './elements/Carousel/CarouselCard';


import N3rdyGeneratorImage from '/public/assets/imgs/projects/NG-Project.webp';
import BonetoERamalho from '/public/assets/imgs/projects/bonetoeramalho.webp';
import UnibankImage from '/public/assets/imgs/projects/prj-unibank.gif';
import TccSGDBImage from '/public/assets/imgs/projects/tcc-sistema-biblioteca.webp';
import ByteStoreImage from '/public/assets/imgs/projects/ByteStore.webp';
import NotFoundImage from '/public/assets/imgs/projects/notfound.webp';



export default function ProjectsContent() {


    return (
        <div>
            <div className='flex h-7 mb-3'>
                <Image className='invert align-middle mr-2 select-none' src={ProjectsIcon} alt="Icon" width={28} height={28} />
                <h1 className='text-xl text-white select-none'>Projetos</h1>
            </div>
            <div className='mx-12'>
                <Carousel className="w-full mx-auto p-2">
                    <CarouselContent>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className='grid grid-cols-3 grid-rows-1 gap-2'>
                                    <CardCarousel imageUrl={N3rdyGeneratorImage} title="N3rdyGenerator" description="N3rdyGenerator Foi um projeto iniciado em 07/2019, com intuito de gerar contas de Minecraft, Spotify, Steam e até Discord Nitro. Projeto foi Encerrado no final de 2019 e teve o projeto refeito em 2020 mas sem sucesso de concluir." onPrimaryClick="https://github.com/iagof-dev/N3rdyGenerator" onSecondaryClick="" />
                                    <CardCarousel imageUrl={UnibankImage} title="UniBank" description="Unibank foi um desafio de uma prova de projeto escolar desenvolver um banco digital inovador e moderno, que atenda às necessidades financeiras dos jovens de forma segura e eficiente. Com objetivo de criar uma marca e identidade visual." onPrimaryClick="https://github.com/iagof-dev/unibank" onSecondaryClick="" />
                                    <CardCarousel imageUrl={ByteStoreImage} title="ByteStore" description="Projeto de um E-COMMERCE feito em PHP." onPrimaryClick="https://github.com/iagof-dev/bytestore" onSecondaryClick="" />
                                    <CardCarousel imageUrl={TccSGDBImage} title="Sistema de Gerenciamento da Biblioteca" description="Trabalho de Conclusão de Curso da Etec Joaquim Ferreira do Amaral" onPrimaryClick="https://github.com/iagof-dev/tcc" onSecondaryClick="" />
                                    <CardCarousel imageUrl={NotFoundImage} title="N3rdyTesouro" description="Projeto escolar de um minijogo dentro do Minecraft utilizando Arduino, PHP e Java." onPrimaryClick="https://github.com/iagof-dev/N3rdyTesouro/" onSecondaryClick="" />
                                    <CardCarousel imageUrl={BonetoERamalho} title="Boneto e Ramalho Imóbiliaria" description="Site imobiliário realizado de forma freelance, utilizando PHP e jQuery. O site conta com funcionalidades completas, incluindo Google SEO, um painel administrativo e uma interface intuitiva para usuários e listagem de imóveis." onPrimaryClick="https://github.com/iagof-dev/bonetoeramalho/" onSecondaryClick="" />
                                    </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    );
}