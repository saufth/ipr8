'use client'
import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTextProps {
    className?: string
    texts: string[]
}

export const AnimatedText = ({ texts, className }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [animate, setAnimate] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1 === texts.length ? 0 : currentIndex + 1)
      }, 700)
      setTimeout(() => {
        setAnimate(true)
      }, 800)
    }, 4000)

    return () => clearTimeout(timeout)
  })

  const chars: string[][] = []

  for (const [, char] of texts.entries()) {
    chars.push(char.replaceAll(' ', '\u00A0').split(''))
  }

  const variants: Variants = {
    hidden: {
      y: '200%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  }

  const container: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  }

  return (
    <motion.div
      initial='hidden'
      animate={animate ? 'visible' : 'hidden'}
      variants={container}
    >
      <span className='whitespace-nowrap'>
        {chars[currentIndex]!.flat().map((currentChar, key) => {
          return (
            <span
              style={{
                overflow: 'hidden',
                display: 'inline-block'
              }}
              key={key}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                variants={variants}
              >
                <div
                  className={className}
                >
                  {currentChar}
                </div>
              </motion.span>
            </span>
          )
        })}
      </span>
    </motion.div>
  )
}
