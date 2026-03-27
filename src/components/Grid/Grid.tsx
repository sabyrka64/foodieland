import './Grid.scss'
import type { TGridProps } from './types'
import clsx from 'clsx'

export default ({ className }: TGridProps) => {
  return <div className={clsx('grid', className)}>Grid</div>
}
