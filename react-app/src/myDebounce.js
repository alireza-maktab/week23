export function myDebounce(fn, time) {
  let lastCall = -1 * time;
  let lastValue;
  return (...params) => {
    if (lastCall + time <= Date.now()) {
      lastCall = Date.now();
      lastValue = fn(...params);
    }
    return lastValue;
  };
}

// const debouncedFn = myDebounce((name) => {
//   console.log("called " + name);
// }, 500);

// debouncedFn("1");
// debouncedFn("2");
// debouncedFn("3");
// debouncedFn("4");
