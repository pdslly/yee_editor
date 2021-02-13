export function ParseImgsFromPages(pages) {
  let res = []
  if (!Array.isArray(pages)) return res
  pages.forEach(({elements = [], style = {}}) => {
    let pageImg = style.backgroundImage
    if (pageImg) res.push(pageImg)
    elements.forEach(({type, img}) => {
      if (type === 'w-image') res.push(img)
    })
  })
  return res
}