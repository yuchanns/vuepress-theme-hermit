/* eslint-disable no-tabs */
module.exports = function controlsPlugin(md) {
  const image = md.renderer.rules.image
  md.renderer.rules.image = (...args) => {
    const rawCode = image(...args)
    // make regular pattern
    const imgReg = /<img.*?(?:>|\/>)/gi
    const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
    const altReg = /alt=[\'\"]?([^\'\"]*)[\'\"]?/i
    const titleReg = /title=[\'\"]?([^\'\"]*)[\'\"]?/i
    // regular matching start
    const imgs = rawCode.match(imgReg)
    if (!imgs) return rawCode
    const srcs = imgs[0].match(srcReg)
    const alts = imgs[0].match(altReg)
    const titles = imgs[0].match(titleReg)
    // set results
    const src = srcs ? srcs[1] : ''
    const alt = alts ? alts[1] : ''
    const title = titles ? titles[1] : ''
    // replace rawCode
    const finalCode = rawCode.replace(/(<img.*?>)+/g, `<v-lazy-image src='${src}' alt='${alt}' title='${title}' />`)
    return finalCode
  }
}