function Car() {
  this.speed = 0;
}

Car.prototype.accelerate = function (num) {
  const speedUp = (this.speed += num);
  return speedUp;
};

Car.prototype.brake = function (num) {
  const speedDown = this.speed - num;
  speedDown > 0 ? (this.speed = speedDown) : (this.speed = 0);
};

const a1 = new Car();
console.log(":", a1.speed);

a1.accelerate(1);
a1.accelerate(2);
console.log("::", a1.speed);

a1.brake(2);
console.log(":::", a1.speed);
a1.brake(3);
console.log("::::", a1.speed);
