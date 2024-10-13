const move = () => {
    window.addEventListener("wheel", (x) => {
        if (x.deltaY > 0) {
            console.log("up");
            gsap.to(".marque", {  // Added the dot (.) for class selector
                x: '-200%',
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".marque img", {
                rotate: 0,
            });
        } else {
            gsap.to(".marque", {  // Added the dot (.) for class selector
                x: '0%',
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".marque img", {
                rotate: 180,
            });
        }
    });
}

move();
