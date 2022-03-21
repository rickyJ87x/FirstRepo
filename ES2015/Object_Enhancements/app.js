//Same keys and values

function createInstructor (firstName, LastName) {
    return {
        firstName, LastName
}
}

//Computed Property Names

var favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

  //Object Methods

  const instructors = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //createAnimal function

  function createAnimal(species, verb, noise){
      return {
          species,
          [verb](){
              return noise;
          }
      }
  }
  