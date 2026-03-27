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

function App() {
  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <Hero></Hero>
        <WhatWeDo></WhatWeDo>
        <OurStory></OurStory>
        <HowItWorks></HowItWorks>
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
