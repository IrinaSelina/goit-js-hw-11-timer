
// const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]'),
// }

// // class CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });

// const finalDate = new Date(2021, 7, 12, 18, 0, 0, 0)
// let currentData = null
// let markupData = null 
//  function pad(value) {
//     return String(value).padStart(2, '0');
//   }
// function countTime(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     return {days, hours, mins, secs }
// }

// function makeMarkup({ days, hours, mins, secs }) {
//     refs.days.textContent = days
//     refs.hours.textContent= hours 
//     refs.mins.textContent = mins
//     refs.secs.textContent = secs
// }

// function startTimer() {
// currentData = Date.now()
//     markupData = finalDate - currentData
// if(finalDate <= currentData) {
//         return clearInterval(intervaltId) 
//     }  
//     makeMarkup(countTime(markupData)) 
// }

// let intervaltId = setInterval(startTimer, 1000)

class CountdownTimer {
  constructor({ selector, finalDate }) {
    this.element = selector;
    this.finalDate = finalDate;
  }
  countTime() {
    const time = this.finalDate - Date.now();
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

    document.querySelector('[data-value="days"]').textContent = `${days}`;
    document.querySelector('[data-value="hours"]').textContent = `${hours}`;
    document.querySelector('[data-value="mins"]').textContent = `${mins}`;
    document.querySelector('[data-value="secs"]').textContent = `${secs}`;
  }
    startTimer() {
        let intervlId = setInterval(() => {
      if(this.finalDate <= Date.now()) {
          clearInterval(intervlId) 
    }   
      this.countTime();
    }, 1000);
    }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  finalDate: new Date(2021, 7, 12, 18, 0, 0),
});
timer.startTimer();
