const randomInterval = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default {
  fakeAJAXCall: (json) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(json);
      }, randomInterval(500, 2500));
    });
  },
};
