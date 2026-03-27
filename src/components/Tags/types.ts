import type { HTMLAttributes } from 'react'
import type { Tag } from '@/components/HeroCard/types'

export type TTagsProps = HTMLAttributes<HTMLElement> & {
  tags: Tag[]
}
