/**
 * Created by Karetko Victor on 25.02.2017.
 * Modify the Bike constructor to have a private property called gear
 * and two public methods called getGear and setGear to get and set that value.
 */

var Car = function() {
  var speed = 10;

  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  var gear;
  this.setGear = function(gear) {
    this.gear = gear;
  }
  
  this.getGear = function() {
    return this.gear;
  }

};

var myCar = new Car();

var myBike = new Bike();