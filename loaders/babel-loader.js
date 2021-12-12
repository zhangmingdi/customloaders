const babel = require('@babel/core')
const loaderUtils = require('loader-utils')
function loader(source) {
    const options = loaderUtils.getOptions(this)
    const cb = this.async()
    babel.transform(source, {
        ...options,
        sourceMap: true,
        filename: this.resourcePath.split('/').pop()
    }, (err, res) => {
        cb(err, res.code, res.map)
    })
    return source
}
module.exports = loader