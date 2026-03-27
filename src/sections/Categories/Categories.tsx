import './Categories.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'
import { categories } from './categories.data'

export default () => {
  return (
    <Section title="Categories" titleId="categories" link="View All Categories">
      <Grid columns={6}>
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </Grid>
    </Section>
  )
}
