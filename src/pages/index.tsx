import type { Metadata } from 'minista'
import Hero from '@/sections/Hero'

export const metadata: Metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
    </>
  )
}
