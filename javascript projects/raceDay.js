let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 22;

if (earlyRegister === true && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegister === true && runnerAge > 18) {
  console.log(
    `Welcome! You're Racer #${raceNumber} and you will race at 9:30 am. `
  );
} else if (earlyRegister === false && runnerAge >= 18) {
  console.log(
    `Welcome! You're Racer #${raceNumber} and you will race at 11:00 am.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Welcome Kid! You're racer #${raceNumber} and you will race at 12:30pm`
  );
} else {
  console.log(`Please See the Registration Desk`);
}
