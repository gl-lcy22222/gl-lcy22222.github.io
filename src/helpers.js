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

export const delay = async (func, time) => {
    await sleep(time);

    func();
};

export const shuffle = (arr) => {
    arr.sort(() => (Math.random() < 0.5 ? 1 : -1));
    return arr;
};

export const isString = val => typeof val === 'string' || val instanceof String

export const preloadImage = src => new Image().src = src;

// export const preloadImages = sources => sources.forEach(src => preloadImage(src));
export const preloadImages = sources => sources.map(src => preloadImage(src));

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

export const padding = (val, numOfPadding) => {
    let result = val.toString();

    while (result.length < numOfPadding) {
        result = "0" + result;
    }

    return result;
};

export const multiply = (arr, times) => [
    ...Array(times)
        .fill(0)
        .map((i) => arr).flat()
];

export const choose = list => list[generateInRange(0, list.length - 1)];