import './CategoryCard.scss'
import type { TCategoryCardProps, TCategoryCardCSSProperties } from './types'
import { Image } from 'minista'

export default ({ title, imgSrc, color }: TCategoryCardProps) => {
  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color } as TCategoryCardCSSProperties}
      >
        <div
          className="category-card__image-wrapper"
          style={{ '--catergodyCardImage': `url('${imgSrc}')` } as TCategoryCardCSSProperties}
        >
          <Image className="category-card__image" src={imgSrc} />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}
