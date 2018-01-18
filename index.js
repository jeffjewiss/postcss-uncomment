import postcss from 'postcss'

export default postcss.plugin('postcss-uncomment', (/*opts*/) => {
  return (root, /*result*/) => {
    root.walkDecls(decl => {
      const originalValue = decl.value

      if (originalValue) {
        // no-op
      }
    })
  }
})
