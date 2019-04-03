const convertTime = baseTime => {
  let mins = Math.floor(baseTime / 60);
  let secs = baseTime - mins * 60;
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  return `${mins} : ${secs}`;
};

export { convertTime };
