gsap.from("#image1",{
    delay:0.4,
    opcity:0,
    duration:1,
    y:60
})
gsap.from("#image2",{
    delay:0.4,
    opcity:0,
    duration:1,
    x:60
})
gsap.from("#image3",{
    delay:0.4,
    opcity:0,
    duration:1,
    y:-60
})
gsap.from("#main h1",{
    delay:0.4,
    opcity:0,
    duration:1,
})

gsap.from("#page2 h5, #page2 h1, #page2 #about-us",{
    opcity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        start:"top 60%",
    }
})