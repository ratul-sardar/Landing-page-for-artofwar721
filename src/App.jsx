import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Brief from "./Sections/Brief/Brief";
import ContactUs from "./Sections/ContactUs/ContactUs";
import Faq from "./Sections/Faq/Faq";
import Hero from "./Sections/Hero/Hero";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import NavBar from "./Components/NavBar/NavBar";
import OurStory from "./Sections/OurStory/OurStory";
import Pricing from "./Sections/Pricing/Pricing";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";
import Footer from "./Sections/Footer/Footer";
import WhereOurMusicIsUsed from "./Sections/WhereOurMusicIsUsed/WhereOurMusicIsUsed";
import OurServices from "./Sections/OurServices/OurServices";
import WeHelp from "./Sections/WeHelp/WeHelp";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Select all direct children (sections) of the main element
    const sections = mainRef.current.children;

    const ctx = gsap.context(() => {
      Array.from(sections).forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 30, // Subtle slide up
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Starts animation when top of section is at 85% of viewport
            toggleActions: "play none none none", // Only plays once when scrolled into view
          },
        });
      });
    }, mainRef);

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>

      <main ref={mainRef}>
        <Hero></Hero>
        <WhatWeDo></WhatWeDo>
        <WeHelp></WeHelp>
        <OurStory></OurStory>
        <OurServices></OurServices>
        <HowItWorks></HowItWorks>
        <WhereOurMusicIsUsed></WhereOurMusicIsUsed>
        <Faq></Faq>
        <Pricing></Pricing>
        <Brief></Brief>
        <ContactUs></ContactUs>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
