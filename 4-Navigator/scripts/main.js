const addresLat = 12;
const addresLong = 13;
const positionLat  = 5;
const positionLong  = 8;
let distance = Math.sqrt((addresLat - positionLat)**2 + (addresLong - positionLong)**2);
console.log(distance);