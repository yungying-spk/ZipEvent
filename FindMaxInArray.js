function findMaxNum(number){
    let MaxNum =number[0]
    for(let i =0;i<number.length;i++){
        if(MaxNum < number[i]){
            MaxNum = number[i]
        }
    }
    return MaxNum
}

arr = [12,323,4543,54,12,45,65]
array = [-1,-2,-3,-5,0]
console.log(findMaxNum(array))