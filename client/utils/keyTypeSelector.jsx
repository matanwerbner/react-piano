let lastKeyType,
  keyToggle = false;

const keyTypeSelector = (index) => {
  const BLACK_KEY = 'black-key',
        WHITE_KEY = 'white-key';

  let result,
    isEven = index % 2 === 0,
    forceWhiteKeyIndicies = [4, 9, 16, 21, 28, 33, 40, 45, 52, 57, 64, 69, 76, 81, 88],
    forceWhiteKey = forceWhiteKeyIndicies.indexOf(index) > -1;

  if (forceWhiteKey) {
    result = WHITE_KEY;
  } else {
    result = keyToggle ? isEven ? WHITE_KEY : BLACK_KEY : isEven ? BLACK_KEY : WHITE_KEY;
  }

  if (lastKeyType === result) { keyToggle = !keyToggle; }

  lastKeyType = result;

  return result;
};

export default keyTypeSelector;
