// forEach
//doubleValues

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(x){
        newArr.push(x * 2);
    });
    return newArr
}

//onlyEvens

function onlyEvens(arr){
    let newArr = [];
    arr.forEach(function(x){
        if (x % 2 === 0){
            newArr.push(x)
        }
    });
    return newArr;
}

// showFirstAndLast

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(x){
        newArr.push(x[0] + x[x.length -1])
    });
    return newArr;
}

// addKeyAndValue

function addKeyAndValue(arr, key, value){
    let newArr = [];
    arr.forEach(function(x){
        x[key] = value
    });
    return newArr;
}

// vowelCount

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

// doubleValuesWithMap

function doubleValuesWithMap(arr){
    return arr.map(function(x){

    return x * 2;
    });
}

// valTimesIndex
function valTimesIndex(arr){
    return arr.map(function(x, index){
        return x * index
    });
}

// extractKey

function extractKey(arr, key){
    return arr.map(function(x){
        return x[key];
    });

}

//extractFullName

function extractFullName(arr){
    return arr.map(function(x){
        return x.first + " " + x.last;
    });
}

//filterByValue

function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] === true;
    });
  }

  //find

  function find(arr,val){
      return arr.filter(function(x){
          return x === val;
      });
  }

//findInObj

function findInObj(arr, key, value){
    return arr.filter(function(x){
        return x[key] === value;
    });
}

//removeVowels

function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

  //doubleOddNumbers

  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }