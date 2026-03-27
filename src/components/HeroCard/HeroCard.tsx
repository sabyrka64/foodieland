import { Image } from 'minista'
import './HeroCard.scss'
import type { THeroCardProps } from './types'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Tags from '@/components/Tags'
import badgeImage from '@/assets/images/hero/badge.svg'

export default ({
  badge,
  title,
  description,
  tags,
  author,
  heroImgSrc,
}: THeroCardProps) => {
  return (
    <div className="hero-card">
      <div className="hero-card__body">
        <div className="hero-card__body-main">
          <div className="hero-card__body-badge">
            <Image
              className="hero-card__badge-image"
              src={badge.imgSrc}
              width={24}
              height={24}
            />
            <span className="hero-card__badge-label">{badge.label}</span>
          </div>
          <h2 className="hero-card__title h1">{title}</h2>
          <p className="hero-card__description">{description}</p>
          <Tags className="hero-card__tags" tags={tags} />
        </div>
        <div className="hero-card__footer">
          <div className="hero-card__author">
            <Image className="hero-card__author-image" src={author.imgSrc} />
            <div className="hero-card__author-body">
              <span className="hero-card__author-name">{author.name}</span>
              <time
                className="hero-card__author-date"
                dateTime={author.date.dateTime}
              >
                {author.date.label}
              </time>
            </div>
          </div>
          <Button className="hero-card__button">
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </div>
        <Image
          className="hero-card__badge"
          src={badgeImage}
          width={150}
          height={150}
        />
      </div>
      <div className="hero-card__image-wrapper">
        <Image
          className="hero-card__image"
          src={heroImgSrc}
          width={660}
          height={640}
        />
      </div>
    </div>
  )
}
