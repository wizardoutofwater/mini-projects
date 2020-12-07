let userName = 'Mike';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Will I win the lottery?';

console.log(`${userName} asks "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is Certain';
    break;
  case 1:
    eightBall = 'It is Decidely so';
    break;
  case 2:
    eightBall = 'Reply Hazy, Try again';
    break;  
  case 3:
    eightBall = 'cannot predict now';
    break;
  case 4:
    eightBall = "Don't Count on It";
    break;
  case 5:
    eightBall = 'My Sources Say No';
    break;
  case 6:
    eightBall = 'Totes Mcgotes';
    break;
  case 7:
    eightBall = 'Signs point to hell yeah!';
    break;
}

console.log(eightBall)