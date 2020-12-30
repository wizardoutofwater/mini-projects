// Write your function here:
function howOld(age, year) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;

  // console.log(currentYear);
  // console.log(yearDifference);
  // console.log(newAge);

  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(33, 2570));


