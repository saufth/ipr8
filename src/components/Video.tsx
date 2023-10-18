'use client'
import { type MouseEvent } from 'react'

interface VideoProps {
  src: string
}

export default function Video ({ src }: VideoProps) {
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  return (
    <div className='absolute inset-0 overflow-hidden flex items-center -z-10 px'>
      <video
        className='w-full h-full object-cover relative rounded-3xl'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}
