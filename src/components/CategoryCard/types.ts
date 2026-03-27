import type { CSSProperties } from 'react'

export interface TCategoryCardCSSProperties extends CSSProperties {
  '--categoryCardColor'?: string
  '--catergodyCardImage'?: string
}

export type TCategoryCardProps = {
  title: string
  imgSrc: string
  color: string
}
