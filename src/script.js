class Timer {
    rootEl = document.querySelector('.js-stopwatch__time');
    startBtnEl = document.querySelector('.js-stopwatch__btn--start');
    stopBtnEl = document.querySelector('.js-stopwatch__btn--stop');
    resetBtnEl = document.querySelector('.js-stopwatch__btn--reset');
    interval = {};
    time = 0;

    addEventListeners = () => {
        this.startBtnEl.addEventListener('click', () => {
            this.interval = window.setInterval(() => {
                this.time++;
                this.printTime();
            }, 1000);
        });

        this.stopBtnEl.addEventListener('click', () => {
            clearInterval(this.interval);
        });

        this.resetBtnEl.addEventListener('click', () => {
            clearInterval(this.interval);
            this.time = 0;
            this.printTime();
        });
    }

    printTime = () => this.rootEl.innerHTML = this.secondsToHms(this.time);

    sliceTime = timeUnit => ('0' + timeUnit).slice(-2);

    secondsToHms = time => {
        const timeArg = time;
        const h = Math.floor(timeArg / 3600);
        const m = Math.floor(timeArg % 3600 / 60);
        const s = Math.floor(timeArg % 3600 % 60);
        const hResult = this.sliceTime(h);
        const mResult = this.sliceTime(m);
        const sResult = this.sliceTime(s);

        return `${hResult}:${mResult}:${sResult}`;
    }
}

const timer = new Timer();

timer.addEventListeners();
