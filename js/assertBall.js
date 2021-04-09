var ball = [2, 3, 7, 10, 26, 31, 10]
var trophyBall = [1, 7, 20, 26, 31, 32]

function assertBall(trophyBall, ball) {
    if (!(trophyBall instanceof Array || typeof trophyBall === 'string')) throw new TypeError('arguments must be array or string!')
    if (!trophyBall) throw new Error('arguments is undefined!')

    trophyBall = typeof trophyBall === 'string' ? trophyBall.split(',') : trophyBall
    ball = typeof ball === 'string' ? ball.split(',') : ball

    const trophyLast = trophyBall.pop()
    const ballLast = ball.pop()

    let res = {
        match: [],
        specialBall: trophyLast,
        assert: trophyLast === ballLast
    }

    trophyBall.forEach(item => {
        ball.forEach(ball => {
            item === ball && res.match.push(item)
        })
    })

    return res
}


// console.log(assertBall(trophyBall, ball))
// console.log(assertBall(trophyBall.toString(), ball))
// console.log(assertBall(trophyBall, ball.toString()))
console.log(assertBall(trophyBall.toString(), ball.toString()))