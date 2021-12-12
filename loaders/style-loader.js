const loaderUtils = require('loader-utils')
function loader(source) {
    console.log('source', source);
    const str = `
        const style = document.createElement('style')
        style.innerHTML = ${JSON.stringify(source)}
        document.head.appendChild(style)
    `
    return str
}
loader.pitch = function (remainingRequest) {
    //为了处理css-loader返回的是js代码块，所以在pitch方法这里重新require()
    //并依次使用less-loader 
    // style.innerHTML = ${require(loaderUtils.stringifyRequest(this, '!!' + remainingRequest))}

    const str = `
        const style = document.createElement('style')
        style.innerHTML = ${require(loaderUtils.stringifyRequest(this, '!!' + remainingRequest))}
        document.head.appendChild(style)
    `
    return str
}

module.exports = loader