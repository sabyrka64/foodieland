import './CategoryCard.scss'
import type { TCategoryCardProps } from './types'
import clsx from 'clsx'

export default ({ className }: TCategoryCardProps) => {
  return <div className={clsx('category-card', className)}>CategoryCard</div>
}
