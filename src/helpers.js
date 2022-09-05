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
