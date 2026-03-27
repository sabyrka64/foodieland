import './Tags.scss'
import type { TTagsProps } from './types'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default ({ className, tags }: TTagsProps) => {
  return (
    <div className={clsx('tags', className)}>
      <ul className="tags__list">
        {tags.map(({ icon, label }) => (
          <li className="tags__item" key={label}>
            <Icon className="tags__item-icon" name={icon} hasFill />
            <span className="tags__item-label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
