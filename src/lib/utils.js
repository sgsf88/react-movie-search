export function getImageUrl(person, size = 's') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}

export function sliceArrayByLimit(totalPage, limit) {
  const totalPageArray = Array(totalPage)
    .fill()
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill()
    .map(() => totalPageArray.splice(0, limit));
}
