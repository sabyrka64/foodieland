export const getIdFromTitle = (title: string) => {
  return title.toLocaleLowerCase().replaceAll(' ', '-')
}
