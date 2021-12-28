export const getTuple = (x) => {
  const y = x.toString().split("");
  return y.length > 1 ? y : [0, parseInt(y[0])];
};
