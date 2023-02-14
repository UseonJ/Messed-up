
// function change(x){
//    return x.replace("aya","1").replace("ye","2").replace("woo","3").replace("ma","4")
// }

// console.log(change("ayaa"))

// function and(arr) {
//    if(arr.length===0) return true;
//    return Boolean((arr[0])*(and(arr.slice(1)))) 
//  }

//  let a =7
//  console.log(Boolean(7))

// function reverseArr(arr) {
//    if(arr.length === 0) return arr;
 
//    return [arr[arr.length-1], ...reverseArr(arr.slice(-1))]
//  }

//  console.log(reverseArr([1, 2, 3, 4]))

// let array = [1, 2, 3, 4]
// console.log(array.slice(0,-1))

// 
function unpackGiftbox(giftBox, wish) {
    //배열을 쭉 훑어서 배열 아닌애들만 wish들어있는지 비교
    //배열들만 모아서 spread 한 다음에 다시 반복
    if(giftBox.length === 0 || wish==='') return false
    
    let result = [] 
    
    for(i=0; i<giftBox.length; i++){
      if(giftBox[i] === wish) {
        return true
      }
      if(Array.isArray(giftBox[i])){
        result.push(giftBox[i])
      }
    }   
    return unpackGiftbox(result, wish)
}

console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'money'], 'iphone'))

// let array = [1,2,3]
// let array2 = [1,2,[3]]

// console.log(array.filter(x => x))