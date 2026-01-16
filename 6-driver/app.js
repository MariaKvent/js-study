const hasLicence = true;
const age = 20;
const isDrunk = false;

const canDrive = hasLicence && (age >=18) && !isDrunk;

console.log(`Может ли сесть за руль? ${canDrive ? 'Может' : 'Не может'}`);