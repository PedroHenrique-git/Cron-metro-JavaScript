(function (clock, start, stop, pause) {
    const clockVisor = document.querySelector(clock);
    const startBtn = document.querySelector(start);
    const stopBtn = document.querySelector(stop);
    const pauseBtn = document.querySelector(pause);

    let seconds = 0;
    let timer = null;

    const startFn = () => {
        timer = setInterval(() => {
            clockVisor.innerText = returnTime(seconds);
            seconds += 1;
        }, 1000);
    };

    const stopFn = () => {
        seconds = 0;
        clockVisor.innerText = returnTime(seconds);
        clearInterval(timer);
    };

    const pauseFn = () => {
        clearInterval(timer);
    };

    const returnTime = (seconds) => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
        });
    };

    startBtn.addEventListener('click', startFn);
    stopBtn.addEventListener('click', stopFn);
    pauseBtn.addEventListener('click', pauseFn);
})('.clock', '.start', '.stop', '.pause');
