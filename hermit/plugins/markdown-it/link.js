/* eslint-disable no-tabs */
module.exports = function controlsPlugin(md) {
  const linkClose = md.renderer.rules.link_close
  md.renderer.rules.link_close = (...args) => {
    const rawCode = linkClose(...args)
    const finalCode = rawCode.replace('<OutboundLink/>', '')
    return finalCode
  }
}
