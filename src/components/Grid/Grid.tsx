import './Grid.scss'
import type { TGridProps } from './types'
import clsx from 'clsx'
import { Children } from 'react'

export default ({ className, children, columns = 1 }: TGridProps) => {
  return (
    <ul className={clsx(`grid grid--${columns}`, className)}>
      {Children.toArray(children).map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
