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

   frames.forEach(function (n, i) {
      zValues.push(i * zSpacing + zSpacing);
      zValues[i] += delta * -5.5;
      let frame = frames[i];
      let transform = `translateZ(${zValues[i]}px)`;
      let opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
       frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
   });
};

window.scrollTo(0, 1);