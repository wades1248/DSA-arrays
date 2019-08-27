function removeSpaces(string){
    let newString = string
    for(let i = 0; i< newString.length; i++){
        if(newString.charAt(i)=== ' '){
            newString= newString.slice(0,i)+'%20'+newString.slice(i+1)
        }
    }
    return newString
}
//O(n)
function lessThanFive(array){
    let filtered = array
    for(let i = 0; i < array.length; i++){
        if(filtered[i]< 5){
            filtered= filtered.slice(0,i).concat(filtered.slice(i+1))
            i--
        }
    }
    return filtered
}
//O(n)

function sum(array){
    let sum = 0
    let newSum= 0
    for(let i = 0; i< array.length; i++){
        newSum+= array[i]
        
        if(newSum > sum){
            sum = newSum
        }
    }
    return sum
}
//O(n)  NOT SURE THIS IS CORRECT, There are untested cases
function merge(array1, array2){
    let unsort = array1.concat(array2)
    let solution = unsort
    for(let i = 0; i< unsort.length; i++){
        if(solution[i] > solution[i+1]){
            solution = solution.slice(0,i).concat(solution[i+1]).concat(solution[i]).concat(solution.slice(i+2))
            i= 0
        }
    }
    return solution
}
//O(n)
function clerify(string1, letters){
    let solution = string1
    for(let i = 0; i< solution.length; i++){
        for(let j = 0; j< letters.length; j++){
            if(solution.charAt(i)=== letters.charAt(j)){
                solution= solution.slice(0,i).concat(solution.slice(i+1))
                i--
            }
        }
    }
    return solution
}
//O(n^2)
function product(array){
    let solution = []
    for(let i = 0; i< array.length; i++){
        let others = array.slice(0,i).concat(array.slice(i+1, array.length))
        let product = 1
        for(let j =0; j< others.length; j++){
            product= product*others[j]
        }
        solution.push(product)
    }
    return solution
}
//O(n^2)
function twoD(array){
    let solution = array
    let collumns = []
    let rows = []

    for(let i = 0; i< array.length; i++){
        for(let j = 0; j< array[i].length; j++){
            if(array[i][j] === 0){
                rows.push(i)
                collumns.push(j)
            }
        }
    }
    for(let i = 0; i< array.length; i++){
        if(rows.includes(i)){
            solution[i] = solution[i].map(x => x*0)
        }
        for(let j = 0; j< array[i].length; j++){
            if(collumns.includes(j)){
                solution[i][j]= 0
            }
        }
    }
    return(solution)
}
//O(n^4)
function rotation (string1, string2){
    let check = false
    if(string1 === string2){
        check = true
    }
    let rotate = string1
    for(let i = 0; i< string1.length; i++){
        rotate = rotate.slice(1).concat(rotate.charAt(0))
        if(rotate === string2)
            check = true
    }
    return check
}
//O(n)