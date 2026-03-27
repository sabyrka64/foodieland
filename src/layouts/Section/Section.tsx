import './Section.scss'
import type { TSectionProps } from './types'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props: TSectionProps) => {
  const { className, title, titleId, description, link, children } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {link && (
          <Button className="section__link" mode="cyan" href="/">
            {link}
          </Button>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
