module.exports = function check(str, bracketsConfig) {
  let result = str;
  let isHaveNextStep = true;

  const configToString = bracketsConfig.map((element) => {
    return element.join('')
  });

  while (isHaveNextStep) {
    isHaveNextStep = false;

    for (let config of configToString) {
      const previousResult = result;
      result = result.replace(config, '');

      if (previousResult !== result) {
        isHaveNextStep = true;
        break;
      }
    }
  }
  return result.length === 0;
}
