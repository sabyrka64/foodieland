type Badge = {
  imgSrc: string
  label: string
}

export type Tag = {
  icon: string
  label: string
}

type Author = {
  imgSrc: string
  name: string
  date: {
    dateTime: string
    label: string
  }
}

export type THeroCardProps = {
  badge: Badge
  title: string
  description: string
  tags: Tag[]
  author: Author
  heroImgSrc: string
}
