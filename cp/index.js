const Fuc = (str) => {
    let result = []
    for(let i= 0;str.length;i++) {
    let chr = str[i].toUpperCase()
    for (let j = 0;j < i; j++) {
        chr = chr + str[i]
    }     
result.push(ch)
    }
    result.join('-')
}