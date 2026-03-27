import './Hero.scss'
import { heroCardData, sliderConfig } from './hero.data'
import HeroCard from '@/components/HeroCard'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Featured content
      </h1>
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify(sliderConfig)}
      >
        <div className="hero__slider-list swiper-wrapper">
          {heroCardData.map(({ id, ...card }) => (
            <div className="hero__slider-item swiper-slide" key={id}>
              <HeroCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
