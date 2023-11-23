// ALEX BROWN GARAGE
this.car = "Honda Civic"
var myGarage = {
    car: "Aston Martin",
    functio() {
        return this.car
    }
}
console.log(myGarage.functio());