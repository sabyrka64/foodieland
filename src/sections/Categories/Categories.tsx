import './Categories.scss'
import type { TCategoriesProps } from './types'
import clsx from 'clsx'

export default ({ className }: TCategoriesProps) => {
  return <div className={clsx('categories', className)}>Categories</div>
}
