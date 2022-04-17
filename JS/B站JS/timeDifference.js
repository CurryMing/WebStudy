let start = new Date(); // 开始时间
let end = new Date(); // 结束时间
// let startDate = new Date(start).getTime();
let startDate = 1640935597061;
// console.log(startDate);
let endDate = new Date(end).getTime();
let dateCha = endDate - startDate;
//计算出相差天数
let days = Math.floor(dateCha / (24 * 3600 * 1000));
//计算出小时数
let leave1 = dateCha % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
let hours = Math.floor(leave1 / (3600 * 1000));
//计算相差分钟数
let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
let minutes = Math.floor(leave2 / (60 * 1000)); // 分
//计算相差秒数
let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
let seconds = Math.round(leave3 / 1000); // 秒
console.log(
  days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒"
);
