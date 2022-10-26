// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = () => {
    cats.push("Ralph")
    return console.log(cats)
}


const destructivelyPrependCat = () => {
    cats.unshift('Bob')
    return cats
}

const destructivelyRemoveLastCat = () => {
    cats.pop()
    return cats
}

const destructivelyRemoveFirstCat = () => {
    cats.shift()
    return cats
}

const appendCat = () => {
    const newCat = "Broom"
    const newArr = [...cats,newCat]
    return newArr
 }
 
 const prependCat = () => {
    const newCat = "Arnold"
    const newArr = [newCat,...cats]
    return newArr
 }

 const  removeLastCat = () => {
     const newArr =  cats.slice(0,cats.length-1)
     return newArr
 }

 const  removeFirstCat = () => {
    const newArr = cats.slice(1)
    return  newArr
 }