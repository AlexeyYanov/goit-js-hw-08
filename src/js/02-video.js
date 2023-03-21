import Player from '@vimeo/player';
const iFramePlayer = document.querySelector('iframe');
const player = new Player(iFramePlayer);
import throttle from 'lodash.throttle';
const localStorageKey = 'videoplayer-current-time';
function handlerTimeUpdate(event) {
  localStorage.setItem(localStorageKey, event.seconds);
  console.log(event.seconds);
}

player.on('timeupdate', throttle(handlerTimeUpdate, 1000));
const saveSecondsTime = localStorage.getItem(localStorageKey);
player.setCurrentTime(saveSecondsTime || 0);
