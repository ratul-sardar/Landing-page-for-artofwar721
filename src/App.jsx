import Brief from "./Sections/Brief/Brief";
import ContactUs from "./Sections/ContactUs/ContactUs";
import Faq from "./Sections/Faq/Faq";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import OurStory from "./Sections/OurStory/OurStory";
import Pricing from "./Sections/Pricing/Pricing";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <WhatWeDo></WhatWeDo>
      <OurStory></OurStory>
      <HowItWorks></HowItWorks>
      <Faq></Faq>
      <Pricing></Pricing>
      <Brief></Brief>
      <ContactUs></ContactUs>
    </>
  );
}

export default App;
