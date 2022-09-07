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

  if (passwordOptions.length === 0) {
    throw new Error('Please choose some flags');
  }

  const randomPassword = [];

  while (randomPassword.length < length) {
    const randomArray = randomElement(passwordOptions);

    const randomSymbol = randomElement(passwordValues[randomArray]);

    randomPassword.push(randomSymbol);
  }

  return randomPassword.join('');
}

export function passwordStrength(length, flags) {
  if (length <= 5) {
    return 1;
  }

  if (length + flags < 14) {
    return 1;
  }

  if (length + flags >= 14 && length + flags < 16) {
    return 2;
  }

  if (length + flags >= 16 && length + flags < 18) {
    return 3;
  }

  if (length + flags === 18) {
    return 4;
  }
}
