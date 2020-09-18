/*
    获取字符串中连续出现最多的字符和其个数
*/

var str = 'aaaaaabbbaabbbssssbbbsssssscccccddddcccccc' 

function findChar(str) {
    if (typeof str !== 'string') throw new TypeError('arguments need be a string!')

    function _search(str) {
        let charArr = []
        let charCount = 0
    
        let tempArr = []
    
        let strArr = Array.from(str)
    
        strArr.forEach((item, index) => {
            let n = 1
            let nextIndex = index + 1
    
            while (nextIndex <= strArr.length) {
                if (strArr[nextIndex] === item) {
                    n ++
                } else {
                    break
                }
                nextIndex ++
            }
    
            tempArr.push(n)
        })
    
        charCount = Math.max(...tempArr)
        
        tempArr.forEach((item, index) => {
            charCount === item && charArr.push(str[index].repeat(charCount))
        })
    
        return { charArr, charCount }
    }
    
    function _searchReg(str) {
        let charArr = []
        let charCount = 0
        let matchArr = str.match(/(\w)\1+/g).sort((x, y) => y.length - x.length)
    
        charCount = matchArr[0].length
    
        matchArr.forEach(item => {
            if (item.length === charCount) {
                charArr.push(item)
            }
        })
    
        return { charArr, charCount }
    }
    
    // console.log(_search(str))
    // console.log(_searchReg(str))
}

findChar(str)
