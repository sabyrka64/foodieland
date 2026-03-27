import './Navigation.scss'
import type { TNavigationProps } from './types'
import clsx from 'clsx'
import { menuItems } from './navigation.data'

export default ({ className, url, extraAttrs }: TNavigationProps) => {
  return (
    <nav className={clsx('navigation', className)} {...extraAttrs}>
      <ul className="navigation__list">
        {menuItems.map(({ label, href }) => (
          <li className="navigation__item" key={href}>
            <a
              className={clsx('navigation__link', href === url && 'is-active')}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
