// Exercise 2: Create a Prototype with Chaining and Inheritance
// Instructions: 
// 1. Create a constructor function called "Device" with a "brand" property and a method "powerOn" that logs "[brand] device is now powered on."
// 2. Create another constructor function called "Smartphone" that inherits from Device, and add a "model" property to Smartphone.
// 3. Add a method "call" to Smartphone's prototype that logs "Calling from [brand] [model]..."



// YOUR CODE HERE
function Device(brand){
    this.brand = brand;
}

Device.prototype.powerOn = function (){
    return `${this.brand} device is now powered on`;
};

function Smartphone(brand, model){
    this.model = model;
    Device.call(this, brand)
}
Smartphone.prototype = new Device();
Smartphone.prototype.constructor = Smartphone;

Smartphone.prototype.call = function(){
    return`Calling  from ${this.brand} ${this.model}`
}



// Test the Smartphone prototype with inheritance
const myPhone = new Smartphone("Apple", "iPhone 14");
console.log(myPhone.powerOn());  // Output: Apple device is now powered on. (inherited from Device)
console.log(myPhone.call());     // Output: Calling from Apple iPhone 14. (defined in Smartphone)