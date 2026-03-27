import './Button.scss'
import clsx from 'clsx'
import type { TButtonProps } from './types'

export default ({
  className,
  mode,
  type = 'button',
  href,
  children,
}: TButtonProps) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx(`button button--${mode}`, className)}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
