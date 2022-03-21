const filterOutOdds = (...args) => args.filter (num => num % 2 === 0)

//findMin

const findMin = (...num) => Math.min(...num)

//mergeObjects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) 

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//Slice and Dice

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), items.slice(idx +1)];
}

//Return a new array with every item in array1 and array2
const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

//Return a new object with all the keys and values from a new key/value pair

const addKeyVal = (obj, key, val) => {
let newObj = { ...obj}
newObj[key] = val;
return newObj
};

//Return a new object with a key removed

const removeKey = (obj, key) => {
    let newOBj = {...obj}
    delete newObj[key]
    return newObj;
}

// Combine two objects and return a new object

const combineObj = (obj1, obj2) => {
return {...obj1, ...obj2};
}