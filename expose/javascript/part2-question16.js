let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
for (const PRO in statistics) {
    if (PRO.startsWith('r') || statistics[PRO] % 2 == 1) {
        console.log(statistics[PRO]);
    }
}