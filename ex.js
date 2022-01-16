document.body.style.cursor = "none";
document.head.style.cursor = "none";


const customCursor = document.createElement('div');

customCursor.style.width="15px";
customCursor.style.height="15px";
customCursor.style.border="2px solid aqua";
customCursor.style.borderRadius="50%";
customCursor.style.position="absolute";
customCursor.style.transitionTimingFunction ="ease-out";
customCursor.style.transitionDuration = "100ms";
customCursor.style.pointerEvents = "none"
customCursor.style.zIndex = "2147483647"
document.body.appendChild(customCursor);
document.addEventListener('mousemove', e =>{
    var x = e.pageX-10
    var y = e.pageY-10
    customCursor.style.top = y+"px"
    customCursor.style.left = x+"px" 
    })


