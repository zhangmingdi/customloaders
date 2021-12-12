
function loader(source) {
    // css-loader的作用 
    const reg = /url\((.+?)\)/g
    let pos = 0;
    let current
    let str = ''
    let arr = ['let list=[]']
    while (current = reg.exec(source)) {
        const [matchUrl, g] = current
        const last = reg.lastIndex - matchUrl.length
        arr.push(`
            list.push(${JSON.stringify(source.slice(pos, last))})
        `)
        str += source.slice(pos, last)
        pos = reg.lastIndex
        arr.push(`list.push('url('+require(${g})+')')`)
        str += `url(require(${g}))`
    }
    arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)
    str += source.slice(pos)
    arr.push(`module.exports=list.join('')`)
    return arr.join('\r\n')
    //为何不直接返回str让style-loader直接去处理呢？因为css处理过的url已经变成require，如果
    //直接返回str去让style-loader处理那么会，require没经过webpack打包处理，相应的图片也没被打包
    // return str
}

module.exports = loader