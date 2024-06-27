var cycle = {
    Drive: "manual",
    Gear: 0,
    speed: 10
};
var bike = {
    Drive: "Automatic",
    Gear: 4,
    speed: 40
};
var car = {
    Drive: "Automatic",
    Gear: 5,
    speed: 100
};
var vechicles = [cycle, bike, car];
//filter >20
var fastvechicles = vechicles.filter(function (vechicle) { return vechicle.speed > 20; });
console.log(fastvechicles);
var highspeed = 0;
fastvechicles.forEach(function (vechicle) {
    if (vechicle.speed > highspeed) {
        highspeed = vechicle.speed;
    }
});
console.log(highspeed);
