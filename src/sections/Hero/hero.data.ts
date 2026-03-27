import scrollImage from '@/assets/images/hero/scroll.png'
import authorImage from '@/assets/images/hero/author.png'
import heroBgImage from '@/assets/images/hero/hero-card-bg.png'

export const sliderConfig = {
  spaceBetween: 120,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  effect: 'coverflow',
}

export const heroCardData = [
  {
    id: 1,
    badge: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        dateTime: '2022-03-15',
        label: '15 March 2022',
      },
    },
    heroImgSrc: heroBgImage,
  },
  {
    id: 2,
    badge: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        dateTime: '2022-03-15',
        label: '15 March 2022',
      },
    },
    heroImgSrc: heroBgImage,
  },
  {
    id: 3,
    badge: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        dateTime: '2022-03-15',
        label: '15 March 2022',
      },
    },
    heroImgSrc: heroBgImage,
  },
]
