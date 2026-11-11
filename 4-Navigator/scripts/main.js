const addressLat = 12;
const addressLong = 13;
const positionLat  = 5;
const positionLong  = 8;
let distance = Math.sqrt((addressLat - positionLat)**2 + (addressLong - positionLong)**2);
console.log(distance);