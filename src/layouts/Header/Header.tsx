import './Header.scss'
import type { THeaderProps } from './types'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
import Navigation from '@/components/Navigation'
import BurgerButton from '@/components/BurgerButton'

export default ({ url }: THeaderProps) => {
  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <Navigation
          className="header__menu"
          url={url}
          extraAttrs={{ 'data-js-mobile-menu-overlay': '' }}
        />
        <Socials className="header__soc1als" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
