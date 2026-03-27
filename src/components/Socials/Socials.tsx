import './Socials.scss'
import type { TSocialsProps } from './types'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { links } from './socials.data'

export default ({ className }: TSocialsProps) => {
  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {links.map(({ label, icon }) => (
          <li className="soc1als__item" key={label}>
            <a className="soc1als__link" href="/" title={label}>
              <span className='visually-hidden'>{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
