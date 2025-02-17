const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
// console.log(progressCover);
const volumBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = " | | ";
  video.play();
};

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};
// 플레이, 멈춤 기능

const formatting = (time) => {
  // 1시간은 60분!
  // 1분은 60초!
  // 1초?
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
  // duration.innerText = video.duration;
};
// 시간을 숫자로 표시기능

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  // console.log(progressPointer);
  const duration = video.duration;
  const currentTime = video.currentTime;
  const precent = (currentTime / duration) * 100;
  progressBar.style.width = `${precent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};
// 진행바 시간에 따라 이동

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  // 구조분해할당!!!!! const rate = e.target.dataset.rate;
  video.playbackRate = rate;
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};
// 진행바 조절기능
// e.pageX는 화면 왼쪽 끝에서 내 포인트 지점까지, offsetLeft는 화면 왼쪽 끝에서 내 화면 전까지

playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", videoPoint);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});
// 전체화면 조정기능

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
    video.addEventListener("pointer", togglePlay);
  }
});
// 풀스크린일때에 생기는 오류에 대한 해결 click이 아닌 pointerdown이 사용되어야 한다
