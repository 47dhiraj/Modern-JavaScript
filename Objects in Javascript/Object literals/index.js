//Object Literal for creating objects (Yesari object banauna sakinxa but yesari nabanaune ..rather you can use functional way)
// let car = {
//   name: "Maruti 800",
//   topSpeed: 89,
//   run: function() {
//     console.log("car is running");
//   } 
// };





// creating object using functional way
function GeneralCar(givenName, givenSpeed)     
{

  this.name = givenName;
  
  this.topSpeed = givenSpeed;

  this.run = function() 
  {
    console.log(`${this.name} Is Running`);
  };

  this.analyze = function() 
  {
    console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`)
  };

};


//Creating new objects by calling GeneralCar function by using new keyword.
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);

console.log(car1)
console.log(car2)
console.log(car3)





