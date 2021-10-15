let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}; 
let odd_checker = 0;

for(let prop in statistics) {
    odd_checker++;
    if(odd_checker % 2 == 1 || prop[0] == 'r'){
        console.log(`statistics.${prop} = ${statistics[prop]}`);
    }
}