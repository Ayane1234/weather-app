export const dateFormat = (today, format) => {
  format = format.replace(/YYYY/g, today.getFullYear());
  format = format.replace(/MM/g, ("0" + (today.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ("0" + today.getDate()).slice(-2));
  format = format.replace(/hh/g, ("0" + today.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + today.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + today.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + today.getMilliseconds()).slice(-3));
  return format;
};
