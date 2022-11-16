
// 1
//
// let field = document.getElementById('field');
// let ball = document.getElementById('ball');
// field.onclick = function(elem) {
//     let fieldCoord = this.getBoundingClientRect()
//     console.log(fieldCoord);
//     console.log(elem.clientY);
//     console.log(fieldCoord.top);
//     console.log(field.clientTop);
//     console.log(fieldCoord);

//     let ballCoord = {
//         top: elem.clientY - fieldCoord.top - field.clientTop - ball.clientHeight / 2,
//         left: elem.clientX - fieldCoord.left - field.clientLeft - ball.clientWidth / 2
//     }
//       if (ballCoords.top < 0) ballCoords.top = 0;
//       if (ballCoords.left < 0) ballCoords.left = 0;
//       if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//       }
//       if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//       }
//     ball.style.top = ballCoord.top + 'px'
//     ball.style.left = ballCoord.left + 'px'
// }
//
// 2
// panels = document.getElementsByClassName('panel')
// for(let panel of panels) {
//     panel.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//     panel.firstChild.onclick = () => panel.remove()
// }
//
//3
// let container = document.getElementById('container')
// container.onclick = function(event){
//     if(event.target.className != 'remove-button'){
//         return
//     }
//     let panel = event.target.closest('.panel');
//     panel.remove();
// }