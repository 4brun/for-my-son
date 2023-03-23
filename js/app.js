const zSpacing = -1000;
const frames = Array.from(document.getElementsByClassName("frame"));
let lastPositin = zSpacing / 5;
let zValues = [];

window.onload = function () {
   document.body.classList.add('loaded');
 }

window.onscroll = function () {
   let top = document.documentElement.scrollTop,
      delta = lastPositin - top;

   lastPositin = top;

   frames.forEach((el, index) => {
      zValues.push(index * zSpacing + zSpacing);
      zValues[index] += delta * -5.5;
      let frame = frames[index];
      let transform = `translateZ(${zValues[index]}px)`;
      let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
       frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
   });
};

window.scrollTo(0, 1);