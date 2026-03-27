import './Categories.scss'
import type { TCategoriesProps } from './types'
import Section from '@/layouts/Section'

export default ({ className }: TCategoriesProps) => {
  return (
    <Section
      title="Categories"
      titleId="categories"
      link="View All Categories"
    ></Section>
  )
}
