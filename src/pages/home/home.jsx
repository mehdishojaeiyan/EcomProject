// import "./home.css";
// import React, { useRef } from "react";
// import homeTrade from "../../assets/image/homeTrade2.jpeg";
// import roadImg from "../../assets/image/roadeMap.svg";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const Home = () => {
//   const onEnter = (e) => {
//     gsap.to(e.target, { scale: 1.1 });
//   };

//   const onLeave = (e) => {
//     gsap.to(e.target, { scale: 1 });
//   };

//   const mainRoad = useRef();

//   useGSAP(
//     () => {
//       const boxes = gsap.utils.toArray(".roadText");
//       boxes.forEach((box) => {
//         gsap.to(box, {
//           x: 150,
//           scrollTrigger: {
//             trigger: box,
//             start: "bottom bottom",
//             end: "top 20%",
//             scrub: true,
//             //markers: true,
//           },
//         });
//       });
//     },
//     { scope: mainRoad }
//   );

//   const main = useRef();
//   const scrollTween = useRef();
//   const { contextSafe } = useGSAP(
//     () => {
//       const panels = gsap.utils.toArray(".panel");
//       panels.forEach((panel, i) => {
//         ScrollTrigger.create({
//           trigger: panel,
//           start: "top bottom",
//           end: "+=200%",
//           onToggle: (self) =>
//             self.isActive && !scrollTween.current && goToSection(i),
//           id: "panel-" + i,
//         });
//       });
//       ScrollTrigger.create({
//         start: 0,
//         end: "max",
//         snap: 1 / (panels.length - 1),
//       });
//     },
//     { scope: main }
//   );

//   const goToSection = contextSafe((i) => {
//     const yPosition = i * window.innerHeight;
//     scrollTween.current = gsap.to(window, {
//       scrollTo: { top: yPosition, behavior: "smooth" },
//       duration: 1,
//       id: "scrollTween",
//       onComplete: () => (scrollTween.current = null),
//       overwrite: true,
//     });
//     console.log(scrollTween.current.scrollTo);
//   });
//   return (
//     <>
//       <div className="homeContainer ">
//         <div className="headHome  mb-3">
//           <div
//             className="sloganDivImg mt-3"
//             onMouseEnter={onEnter}
//             onMouseLeave={onLeave}
//           >
//             <img className="sloganImg" src={homeTrade} alt="" />
//           </div>
//           <div className="sloganH1">
//             {" "}
//             <h2 className="h1 mt-4">Smart Trading Starts Here!</h2>
//             <h2 className="h3">Choose Your Strategy, Trade Like a Pro!</h2>
//             <button className="mt-5 btn btn-primary btn-lg">Get Started</button>
//           </div>
//         </div>
//         <div className="roadMap">
//           <div className="roadContent p-4">
//             <p className="h1 mb-5 ">
//               How can I get started?
//               <p className="h2 mt-4">Follow me.</p>
//             </p>
//             <div className="roadTextDiv " ref={mainRoad}>
//               <p className="h3  roadText mb-5 pb-5">
//                 1. First, you need to create an account.
//               </p>
//               <p className="h3 roadText mb-5 pb-5">
//                 2. In the next step, you should follow leaders and strategies.
//               </p>
//               <p className="h3 roadText mb-5 pb-5">
//                 3. We provide you with credit to trade and gain experience.
//               </p>
//               <p className="h3 roadText mb-5 pb-5">
//                 4. Now you can trade with your own money and make profits.
//               </p>
//             </div>
//           </div>
//           <div className="roadAnim">
//             <div className="roadImg">
//               <img className="mt-3" src={roadImg} alt="" />
//               <p className="h3 roadText mb-5 ">We’re with you all the way. </p>
//             </div>
//           </div>
//         </div>
//         <div className="whyEcom">
//           <main ref={main}>
//             <section className="description panel light">
//               <div>
//                 <h1>Layered pinning</h1>
//                 <p>
//                   Use pinning to layer panels on top of each other as you
//                   scroll.
//                 </p>
//                 <div className="scroll-down">
//                   Scroll down<div className="arrow"></div>
//                 </div>
//               </div>
//             </section>
//             <section className="panel dark">ONE</section>
//             <section className="panel orange">TWO</section>
//             <section className="panel purple">THREE</section>
//             <section className="panel green">FOUR</section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import "./home.css";
import React, { useEffect, useState, useRef } from "react";
import homeTrade from "../../assets/image/homeTrade2.jpeg";
import roadImg from "../../assets/image/roadeMap.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const [mainHeight, setMainHeight] = useState(0);
  const mainRoad = useRef();
  const main = useRef();
  const scrollTween = useRef();

  useEffect(() => {
    const updateMainHeight = () => {
      setMainHeight(main.current.clientHeight);
    };
    updateMainHeight();
    window.addEventListener("resize", updateMainHeight);

    return () => {
      window.removeEventListener("resize", updateMainHeight);
    };
  }, []);

  const onEnter = (e) => {
    gsap.to(e.target, { scale: 1.1 });
  };

  const onLeave = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".roadText");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            //markers: true,
          },
        });
      });
    },
    { scope: mainRoad }
  );

  const goToSection = (i) => {
    const yPosition = main.current.children[i].offsetTop;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };
  const { contextSafe } = useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
          id: "panel-" + i,
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: main }
  );

  return (
    <>
      <div className="homeContainer ">
        <div className="headHome  mb-3">
          <div
            className="sloganDivImg mt-3"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <img className="sloganImg" src={homeTrade} alt="" />
          </div>
          <div className="sloganH1">
            {" "}
            <h2 className="h1 mt-4">Smart Trading Starts Here!</h2>
            <h2 className="h3">Choose Your Strategy, Trade Like a Pro!</h2>
            <button className="mt-5 btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
        <div className="roadMap">
          <div className="roadContent p-4">
            <p className="h1 mb-5 ">
              How can I get started?
              <p className="h2 mt-4">Follow me.</p>
            </p>
            <div className="roadTextDiv " ref={mainRoad}>
              <p className="h3  roadText mb-5 pb-5">
                1. First, you need to create an account.
              </p>
              <p className="h3 roadText mb-5 pb-5">
                2. In the next step, you should follow leaders and strategies.
              </p>
              <p className="h3 roadText mb-5 pb-5">
                3. We provide you with credit to trade and gain experience.
              </p>
              <p className="h3 roadText mb-5 pb-5">
                4. Now you can trade with your own money and make profits.
              </p>
            </div>
          </div>
          <div className="roadAnim">
            <div className="roadImg">
              <img className="mt-3" src={roadImg} alt="" />
              <p className="h3 roadText mb-5 ">We’re with you all the way. </p>
            </div>
          </div>
        </div>
        <div className="whyEcom">
          <main ref={main}>
            <section className="description panel light">
              <div>
                <p className="">Why Ecom</p>
                <p>
                  Use pinning to layer panels on top of each other as you
                  scroll.
                </p>
                <div className="scroll-down">
                  Scroll down<div className="arrow"></div>
                </div>
              </div>
            </section>
            <section style={{ backgroundColor: "gray" }} className="panel dark">
              ONE
            </section>
            <section
              style={{ backgroundColor: "lightgray" }}
              className="panel orange"
            >
              TWO
            </section>
            <section
              style={{ backgroundColor: "red" }}
              className="panel purple"
            >
              THREE
            </section>
            <section
              style={{ backgroundColor: "green" }}
              className="panel green"
            >
              FOUR
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
