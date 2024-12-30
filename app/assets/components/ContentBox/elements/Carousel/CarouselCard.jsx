'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CardCarousel = React.memo(({
  imageUrl,
  title,
  description,
  onPrimaryClick,
  onSecondaryClick
}) => {
  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="group w-full max-w-sm mx-auto overflow-hidden bg-gray-800 text-gray-100 shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 scale-100 group-hover:scale-110 select-none"
          priority
        />
        <div 
          className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
          aria-hidden="true"
        >
          <CardContent className="p-0 mb-3">
            <CardTitle className="text-lg font-bold mb-2 line-clamp-1">{title}</CardTitle>
            <p className="text-xs text-gray-300 line-clamp-3">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-between p-0">
            <Button
              size="sm"
              variant="default"
              onClick={() => handleLinkClick(onPrimaryClick)}
              className="w-[48%] bg-[#9333ea] text-white hover:bg-[#7e22ce] select-none"
            >
              Repositório
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleLinkClick(onSecondaryClick)}
              className="w-[48%] text-[#000000] select-none"
            >
              Detalhes
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
});

CardCarousel.displayName = 'CardCarousel';

export default CardCarousel;
