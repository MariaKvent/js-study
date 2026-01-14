const addressLat = 10;
const addressLong = 50;
const positionLat = 3;
const positionLong = 40;

const distanceBetweeen = (((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2)) ** 0.5; // извлечение из корня заменила на возведение в степень 0.5

console.log(`Расстояние от меня до точки: ${distanceBetweeen} км`);