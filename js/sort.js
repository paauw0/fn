/*
    sort实现
*/

var arr = new Array(8, 6, 7, 9, 1, -1, 4)
var arr1 = new Array(8, 6, 7, 9, 1, -1, 4) 
var arr2 = new Array(8, 6, 7, 9, 1, -1, 4) 
var arr3 = new Array(8, 6, 7, 9, 1, -1, 4) 
var arr4 = new Array(8, 6, 7, 9, 1, -1, 4)

var sortAsc = function(x, y) { return x - y } 
var sortDesc = function(x, y) { return y - x } 

Array.prototype.st = function(fn) {  
    if (fn && typeof fn !== 'function') throw new TypeError('arguments need be a function!')

    var t

    fn = fn || function(x, y) { return x - y }

    fn() < 0 && this.reverse()

    for (var i = 0; i < this.length; i ++) {  
        for (var j = i; j < this.length; j ++) {
            if (fn(this[i], this[j]) > 0) {  
                t = this[i] 
                this[i] = this[j] 
                this[j] = t 
            }  
        }
    }  
} 

// arr.st() 
// console.log("默认升序排列：" + arr) 

// arr1.st(sortDesc) 
// console.log("降序排列：" + arr1) 

// arr2.st(sortAsc) 
// console.log("升序排列：" + arr2) 
    
// arr3.st(function() { return -1 })
// console.log("逆序排列：" + arr3) 

// arr4.sort(function() { return -1 }) 
// console.log("逆序排列：" + arr4) 