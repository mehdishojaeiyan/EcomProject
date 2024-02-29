import "./home.css";
import React, { useEffect, useState, useRef } from "react";
import homeTrade from "../../assets/image/homeTrade2.jpeg";
import roadImg from "../../assets/image/img4.png";
import community from "../../assets/image/community.png";
import mail from "../../assets/image/mail.jpg";
import telePhone from "../../assets/image/telSupport.jpg";
import chatbox from "../../assets/image/chatBox.jpg";
import blog from "../../assets/image/blog.jpg";
import webinar from "../../assets/image/webinar.jpg";
import demochart from "../../assets/image/demochart.jpg";
import { Card, Icon, Button } from "semantic-ui-react";
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

    const handleResize = () => {
      updateMainHeight();
    };

    main.current.addEventListener("resize", handleResize);

    return () => {
      main.current.removeEventListener("resize", handleResize);
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
    main.current.scrollTo({ top: yPosition, autoKill: false });
    // main.current.children[i].scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
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
      // ScrollTrigger.create({
      //   start: 0,
      //   end: "max",
      //   snap: 1 / (panels.length - 1),
      // });
    },
    { scope: main }
  );

  return (
    <>
      <div className="homeContainer ">
        <div className="headHome p-5  mb-3">
          <div className="sloganDivImg mt-3">
            <img
              className="sloganImg"
              src={homeTrade}
              alt=""
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            />
          </div>
          <div className="sloganH1">
            {" "}
            <h2 className="h1 mt-4">Smart Trading Starts Here!</h2>
            <h2 className="h3">Choose Your Strategy, Trade Like a Pro!</h2>
            <Button
                color="violet"
                size='huge'
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className="mt-5"
              >Get Started</Button>
            
          </div>
        </div>
        <div className="roadMap mb-5">
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
         
            <div className="roadImg">
              <img className="mt-3" style={{width:"85%"}} src={roadImg} alt="" />
              {/* <p className="h3 roadText mb-5 ">We’re with you all the way. </p> */}
            </div>
          
        </div>
        <div className="joinCommunity mt-5 mb-5 p-5">
          <div className="communityImg">
            <img src={community} className="communityImg" />
          </div>
          <div className="commucontent">
            <p className="h1">Join our great community</p>
            <p className="h2">
              Register and join our huge community with thousands of traders
              from all over the world.
            </p>
            <div className="mt-4">
              <Button
                color="violet"
                size='huge'
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
               <a style={{color:"#fff"}} href="/community"> Join our big community</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="whyEcom mt-5">
          <main ref={main}>
            <section className="description panel  ">
              <div>
                <p className="h1">Why Ecom</p>
                <p className="h2">
                  We have tried to provide facilities so that you can have the
                  best choices by receiving the best services.
                </p>
                <p className="h2 mt-5">
                  We don’t want to be among the best; we want to be the best.
                </p>
                <div className="scroll-down">
                  Scroll down<div className="arrow"></div>
                </div>
              </div>
            </section>
            <section style={{ backgroundColor: "#f5f5f5" }} className="panel ">
              <div className="supportPanel">
                <p className="h1 mb-3">24-Hour Support </p>
                <p className="h2">
                  We are available 24/7 through various communication channels
                  to assist you.
                </p>
                <div className="whyEcomBoxs mt-5">
                  <div className="whyBox supEmail">
                    {" "}
                    <Card
                      image={mail}
                      header="Email"
                      description=" Your emails will be answered in the shortest possible
            time."
                      extra={
                        <a>
                          <Icon name="mail" />
                          ***@gmail.com
                        </a>
                      }
                    />
                  </div>
                  <div className="whyBox supchat ">
                    {" "}
                    <Card
                      image={telePhone}
                      header="Call"
                      description="Our call center will answer your call."
                      extra={
                        <a>
                          <Icon name="call" />
                          +98**********
                        </a>
                      }
                    />
                  </div>
                  <div className="whyBox suptel">
                    {" "}
                    <Card
                      image={chatbox}
                      header="Online Chat"
                      description=" Chat with our experts right now."
                      extra={
                        <a>
                          <Icon name="chat" />
                          OnLine Chat
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              style={{ backgroundColor: "lightgray" }}
              className="panel orange"
            >
              <div className="educationPanel">
                <p className="h1 mb-3">Education</p>
                <p className="h2">
                  {" "}
                  By utilizing the articles on our website and participating in
                  webinars, you can enhance your knowledge. Additionally,
                  through enrollment in our online classes, you can fully learn
                  trading skills and position yourself among the most advanced
                  traders.
                </p>
                <div className="whyEcomBoxs mt-5">
                  <div className="whyBox">
                    <Card
                      image={blog}
                      header="Blog"
                      description="Comprehensive articles on transactions and financial markets."
                      extra={
                        <a href="/blog">
                          <Icon name="book" />
                          Blog
                        </a>
                      }
                    />
                  </div>
                  <div className="whyBox">
                    <Card
                      image={webinar}
                      header="Webinar"
                      description="Participation in specialized webinars in the field of financial markets."
                      extra={
                        <a>
                          <Icon name="video camera" />
                          Webinar
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="panel ">
              <div className="demopanel">
                <p className="h1">Demo accont</p>

                <div className="whyEcomBoxs">
                  <div className="whyBox">
                    <Card
                      image={demochart}
                      header="Demo accont"
                      description=" Register and get access to the demo account with $10,000 test funds."
                      extra={
                        <a>
                          <Icon name="money" />
                          fund.
                        </a>
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="panel"></section>
          </main>
        </div>
      </div>

    </>
  );
};

export default Home;
