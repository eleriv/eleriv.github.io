

const spans = document.querySelectorAll('hi span')
spans.forEach(span=>span.addEventListener('mouseover', function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span=>span.addEventListener('mouseover', function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const mysqlBar = document.querySelector('.bar-mysql')
const pythonBar = document.querySelector('.bar-python')

var t1 = new TimelineLite()
t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(55% - 6px)`, ease:Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(45% - 6px)`, ease:Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(30% - 6px)`, ease:Power4.easeOut})
    .fromTo(mysqlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(40% - 6px)`, ease:Power4.easeOut})
    .fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(43% - 6px)`, ease:Power4.easeOut})
    
    const controller = new ScrollMagic.Controller()
    const scene = new ScrollMagic.scene({
        triggerElement: '.skills',
        triggerHook: 0
    })
    .setTween(t1)
    .addTo(controller)