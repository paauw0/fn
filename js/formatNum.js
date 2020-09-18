/*
    before: 从前至后, 间隔space添加相同字符sign
    after: 从后至前, 小数点前开始, 货币格式化
*/

var numStr = '10000000.1212312'
var num = 10000000.1212312
var str = '10-00^0&00*0.1212312.112121157457'

/* before */
function formatByReg_before(arg, space, sign) {
    if (typeof arg !== 'string' && typeof arg !== 'number') throw new TypeError('arguments need be a string or number!')

    const str = arg.toString()
    const len = str.length

    const regStr = `\[\\d\\D\]{${space}}`
    const reg = new RegExp(regStr, 'g')

    if (len <= space) return str

    const r = len % space

    return r > 0
        ? str.slice(0, len - r).match(reg).join(sign) + sign + str.slice(len - r)
        : str.match(reg).join(sign)
}


/* after */
function getFormatCurrencyByToLocalString(arg) {
    if (typeof arg !== 'string' && typeof arg !== 'number') throw new TypeError('arguments need be a string or number!')
    
    if (isNaN(Number(arg))) throw new Error('arguments can not be transform to a number')

    const numStr = parseFloat(arg).toString()
    const numStrSplitArr = numStr.split('.')

    const res = numStr.includes('.')
        ? Number(numStrSplitArr[0]).toLocaleString() + '.' + numStrSplitArr[1]
        : Number(numStr).toLocaleString()

    return res
}

function getFormatCurrencyByReg(arg){
    if (typeof arg !== 'string' && typeof arg !== 'number') throw new TypeError('arguments need be a string or number!')

    if (isNaN(Number(arg))) throw new Error('arguments can not be transform to a number')

    const numStr = parseFloat(arg).toString()
    const numStrSplitArr = numStr.split('.')
    const len = numStr.length

    if (len <= 3) return numStr

    const r = len % 3;

    return r > 0
        ? numStrSplitArr[0].slice(0, r) + "," + numStrSplitArr[0].slice(r, len).match(/[\d\D]{3}/g).join(",") + "." + numStrSplitArr[1]
        : numStrSplitArr[0].slice(r, len).match(/[\d\D]{3}/g).join(",") + "." + numStrSplitArr[1]
}
 

// console.log(formatByReg_before(numStr, 3, '!'))
// console.log(formatByReg_before(num, 5, '@'))
// console.log(formatByReg_before(str, 4, '#'))

// console.log(getFormatCurrencyByToLocalString(numStr))
// console.log(getFormatCurrencyByToLocalString(num))
// console.log(getFormatCurrencyByToLocalString(str)) // error

// console.log(getFormatCurrencyByReg(numStr))
// console.log(getFormatCurrencyByReg(num))
// console.log(getFormatCurrencyByReg(str)) // error

