/*function oneTwoThreeRotate(){
    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
        tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
    })
}

oneTwoThreeRotate()*/

const oneTwoThreeRotate = () => {Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
    tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';})}

oneTwoThreeRotate();

