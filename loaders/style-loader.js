function loader(source) {

    const str = `
        const style = document.createElement('style')
        style.innerHTML = ${JSON.stringify(source)}
        document.head.appendChild(style)
    `
    return str
}


module.exports = loader