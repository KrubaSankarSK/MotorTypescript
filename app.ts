interface Motor{
    Drive:String;
    Gear : number;
    speed :number;
}

const cycle: Motor={
    Drive:"manual",
    Gear:0,
    speed:10

};
const bike: Motor={
    Drive:"Automatic",
    Gear:4,
    speed:40
};
const car: Motor={
    Drive:"Automatic",
    Gear:5,
    speed:100
}

const vechicles:Motor[]=[cycle,bike,car];

//filter >20

const fastvechicles = vechicles.filter(vechicle=>vechicle.speed>20);
console.log(fastvechicles);

let highspeed=0;
fastvechicles.forEach(vechicle=>{
    if(vechicle.speed > highspeed){
        highspeed=vechicle.speed;
    }
});
console.log(highspeed)