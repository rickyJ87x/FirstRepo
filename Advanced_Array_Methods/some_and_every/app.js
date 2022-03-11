//hasOddNumber

function hasOddNumber(arr){
    return arr.some(function(x){
        return x % 2 !== 0;
    });
}

// hasAZero

function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }

  //hasOnlyOddNumbers

  function hasOnlyoddNumbers(arr){
      return arr.every(function(x){
          return x % 2 !==0;
      })
  }

  //hasNoDuplicates

  function hasNoDuplicates(arr){
      return arr.every(function(x){
          return arr.indexOf(x) === arr.lastIndexOf(x);
      });
  }

  //hasCertainKey

  function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }

  //hasCertainValue

  function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }