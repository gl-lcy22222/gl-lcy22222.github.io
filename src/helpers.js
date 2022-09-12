import { sounds } from "./configs";

export const percent = num => num / 100;

export const sleep = (time, cancellable) => new Promise(resolve => {
    let timer = setTimeout(resolve, time);

    if (cancellable) {
        cancellable.resolve = resolve;
        cancellable.timer = timer;
    }
});

export const wake = ref => {
    clearTimeout(ref.timer);
    ref.resolve();
};

export const shuffle = (arr) => {
    arr.sort(() => (Math.random() < 0.5 ? 1 : -1));
    return arr;
};

export const isString = val => typeof val === 'string' || val instanceof String

export const preloadImage = src => new Image().src = src;

export const preloadImages = sources => sources.forEach(src => preloadImage(src));

export const playAudio = audio => sounds[audio].play();

export const generateInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const milliSecond = time => time;

export const second = time => milliSecond(time * 1000);

export const minute = time => second(time * 60);

export const hour = time => minute(time * 60);