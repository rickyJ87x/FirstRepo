//findUserByUsername


function findUserByUsername (usersArray, username) {
    return usersArray.find(function(user){
        return user.username === username;
    })
}

//removeUser

function removeUser (arr, username) {
    let foundIndex = arr.findIndex(function(user){
        return user.username === username;
      })
      if(foundIndex === -1) return;
    
      return arr.splice(foundIndex,1)[0];
    }