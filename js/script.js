// add the class fadeIn when we scroll on the element
document.addEventListener("scroll", () => {
  let image = document.getElementById("screen");
  image.classList.add("fadeIn");
})


// display the numbers (from 0 to target number)
let isScroll = false;

document.addEventListener('scroll', () => {
  if(!isScroll) {
    isScroll = true;
    const counters = document.querySelectorAll('.data');
    const speed = 100;

    counters.forEach( counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('target-value');
        const count = +counter.querySelector('span').innerText;
        
        const range = target - count;
        const step = Math.abs(Math.floor(speed / range));
        
        if(count < target) {
          counter.querySelector('span').innerText = (count + 0.1).toFixed(1);
          setTimeout(updateCount, step);
        } else {
          counter.querySelector('span').innerText = target;
        }
      }

    updateCount();
    })
  }
});
