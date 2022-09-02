import { passwordValues } from './passwordValues';

export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function generatePassword(length, params) {
  const passwordOptions = [];
  for (let key in params) {
    if (params[key] === true) {
      passwordOptions.push(key);
    }
  }

  const randomPassword = [];

  while (randomPassword.length < length) {
    const randomArray = randomElement(passwordOptions);

    const randomSymbol = randomElement(passwordValues[randomArray]);

    randomPassword.push(randomSymbol);
  }

  return randomPassword.join('');
}
