import Card from "./Components/Cards/Card";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import OurStory from "./Sections/OurStory/OurStory";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <div className="font-extrabold text-4xl">hi, im alive</div>
      <h1 className="">heading</h1>
      <div className="container px-5 mx-auto">hi im div</div>
      <WhatWeDo></WhatWeDo>
      <OurStory></OurStory>
      <HowItWorks></HowItWorks>
    </>
  );
}

export default App;
