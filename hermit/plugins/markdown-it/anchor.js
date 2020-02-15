/* eslint-disable no-tabs */
module.exports = function controlsPlugin(md) {
  const htmlBlock = md.renderer.rules.html_block
  md.renderer.rules.html_block = (...args) => {
    const rawCode = htmlBlock(...args)
    const finalCode = rawCode.replace('#', '<SvgIcon type="anchor" />')
    return finalCode
  }
}
