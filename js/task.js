let steps = 1
function palindromic(num) {
   let reverseNum =  Number([...num.toString()].reverse().join(""))
    if (num === reverseNum){
        return {num , steps}
    }else {
        steps +=  1
        return palindromic(num + reverseNum)
    }
}
console.log(palindromic(96))