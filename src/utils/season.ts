const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

export const isChristmasSeason =
  (month === 12 && day >= 22) || (month === 1 && day <= 7);
