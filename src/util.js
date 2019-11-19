import Velocity from 'velocity-animate';

export function scrollTo(y, conf = {}) {
  Velocity(document.body, 'scroll', Object.assign({
    offset: y,
    duration: 1000,
    easing: 'easeIn',
    mobileHA: false,
  }), conf);
}

export function isMobile() {
  const reg = /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i;
  return navigator.userAgent.toLowerCase().match(reg) !== null;
}

export async function preloadImages(arr) {
  return new Promise((resolve) => {
    let loadedimages = 0;
    function imageloadpost() {
      loadedimages += 1;
      if (loadedimages === arr.length) {
        resolve();
      }
    }
    arr.forEach((img) => {
      const newimages = new Image();
      newimages.onload = imageloadpost;
      newimages.οnerrοr = imageloadpost;
      newimages.src = img;
    });
  });
}
export default {};
