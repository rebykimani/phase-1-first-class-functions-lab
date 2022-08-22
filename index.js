// // Code your solution in this file!
// function returnFirstTwoDrivers(drivers){
//     const newArr = drivers.slice(0,2);
//     return newArr;
// }
// returnFirstTwoDrivers()
// function returnLastTwoDrivers(drivers){
//     const lastArray = drivers.slice(2,4)
//     return lastArray;
// }
// function selectingDrivers(){
//    returnFirstTwoDrivers()
//   returnLastTwoDrivers()
// }
// console.log("select", returnFirstTwoDrivers.newArr[0])

// function createFareMultiplier(){
//     createFareMultiplier
// }
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};
const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2)
const fareTripler  = createFareMultiplier(3)
// console.log(fareDoubler, fareTripler);  //Function anonymus
const selectDifferentDrivers = function (array, selector) {
    return selector(array);
  };