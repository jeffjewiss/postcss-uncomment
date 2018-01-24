import postcss from 'postcss'

export default postcss.plugin('postcss-uncomment', (/*opts*/) => {
  return (root, /*result*/) => {
    root.walkDecls(decl => {
      if (decl.prop.match(/^\/\/.*/) && decl.raws.between.includes('#uncomment')) {
        const cssString = decl.toString().replace('//', '').replace('#uncomment', '').trim()
        const prop = cssString.split(':')[0].trim()
        const value = cssString.split(':')[1].trim()

        decl.replaceWith({ prop, value })
      }
    })

    root.walkComments(comment => {
      const cssString = comment.text.toString().replace('/*', '').replace('*/', '').replace('#uncomment', '').trim()
      const prop = cssString.split(':')[0].trim()
      const value = cssString.split(':')[1].trim()

      if (comment.text.includes('#uncomment')) {
        comment.replaceWith({ prop, value })
      }
    })
  }
})
