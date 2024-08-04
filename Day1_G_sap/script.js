// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "blue",
//     borderRadius:"50%",
//     scale: 0.5
// })
// gsap.to("#box2",{
//     x:1200,
//     duration:2,
//     delay:1
// })



// second....................
// gsap.from("h1", {
//     // color:"red",
//     opacity:0,
//     duration:2,
//     delay:1,
//     // rotate: 360,
//     repeat:1,
//     yoyo: true
    // stagger:0.5 one by one animation 


// })


//third method 
// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

// time line and hwo to control it
// gsap.to("#box1",{
//     x:1500,
//   rotate:360,
//   duration:1.5,
//   delay:1
// })
//  gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay : 2.5,
//  })
//  gsap.to("#box3",{
//     x:1500
//  })

// Nav bar

var tl = gsap.timeline()
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:
})