import type { Metadata } from 'minista'
import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'

export const metadata: Metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
