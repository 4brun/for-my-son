const zSpacing = -1000
const lastPosition = zSpacing / 5

const $frames = document.getElementsByClassName('frame')
const frame = Array.from($frames)
const zValues = []

window.onscroll = function() {
   const top = document.documentElement.scrollTop
   const delta = lastPosition - top
}