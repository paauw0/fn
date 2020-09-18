/*
    获取字符串中出现最多的字符和其个数
*/

var str = 'asdfsfgfadfadsfaserwserzv'

function findStr(str) {
    if (typeof str !== 'string') throw new TypeError('arguments need be a string!')

    function _getCountObj(str) {
        let countObj = {}
    
        str.split('').forEach(item => {
            countObj[item] = !countObj[item] ? 1 : countObj[item] + 1
        })

        return countObj
    }
    
    function _getMaxCountCharByArr(countObj) {
        let maxChar = []
        let maxCount = 0
        let countArr = []

        Object.keys(countObj).forEach(key => {
            countArr.push(countObj[key])
        })

        maxCount = Math.max(...countArr)

        Object.keys(countObj).forEach(key => {
            countObj[key] === maxCount && maxChar.push(key)
        })

        return { maxChar, maxCount }
    }

    function _getMaxCountCharByStr(countObj) {
        let maxChar = []
        let maxCount = 0

        Object.keys(countObj).forEach(key => {
            maxCount = countObj[key] >= maxCount ? countObj[key] : maxCount
        })

        Object.keys(countObj).forEach(key => {
            countObj[key] === maxCount && maxChar.push(key)
        })

        return { maxChar, maxCount }
    }

    function _getMaxCountCharByReg(str) {
        let maxChar = []
        let maxCount = 0

        const uniqueArr = new Set(str.split('').sort())

        for (let item of uniqueArr) {
            const reg = new RegExp(item, 'g')
            const currentArr = str.match(reg)

            if (maxCount <= currentArr.length) {
                maxCount = currentArr.length
            }
        }

        for (let item of uniqueArr) {
            const reg = new RegExp(item, 'g')
            const currentArr = str.match(reg)

            if (maxCount === currentArr.length) {
                maxChar.push(item)
            }
        }

        return { maxChar, maxCount }
    }

    // console.log(_getCountObj(str))
    // console.log(_getMaxCountCharByArr(_getCountObj(str)))
    // console.log(_getMaxCountCharByStr(_getCountObj(str)))
    // console.log(_getMaxCountCharByReg(str))
}

findStr(str)
