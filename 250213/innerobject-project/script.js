// const myYear = document.querySelector("#year");
// const myMonth = document.querySelector("#month");
// const myDate = document.querySelector("#date");

// const myYearvalue = myYear.value;
// const myMonthvalue = myMonth.value;
// const myDatevalue = myDate.value;

// const now = new Date();

// const btn = document.querySelector("#btn");

// const current = document.querySelector("#current");
// const days = document.querySelector("#days");
// const hour = document.querySelector("#hours");

// console.log(current, days, hour);

// btn.addEventListener("click", result);

// let result = () => {
//   current.innerText = `${myYearvalue}년 ${myMonthvalue}월 ${myDatevalue}일이 흐르고,`;
//   days.innerText = `날짜로는 일이 흐르고`;
//   hour.innerText = `시간으로는 시간이 흘렀습니다`;
// };

//______________________

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");

const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultAge = document.querySelector("#age");

const today = new Date();

current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재😚🤍🎀`;

btn.addEventListener("click", (e) => {
  e.preventDefault;

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value + 1,
    birthDate.value
  );

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

  resultDays.innerText = `날짜로는 ${passedDays} 일이 흐르고,`;
  resultHours.innerText = `시간으로는 ${passedHours} 시간이 흐르고,`;
  resultAge.innerText = `제 나이는 ${passedAges} 세 입니다`;
});
