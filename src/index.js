module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map(([o, c]) => o + c);

  let last_try = str.length + 1;

  while (str.length < last_try) {
    last_try = str.length;
    config.forEach((e) => {
      str = str.replace(e, "");
    });
  }

  return !str.length;
};
