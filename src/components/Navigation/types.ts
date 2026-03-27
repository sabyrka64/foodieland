import type { HTMLAttributes } from 'react'

export type TNavigationProps = HTMLAttributes<HTMLElement> & {
  url?: string
  extraAttrs?: Record<string, string>
}
