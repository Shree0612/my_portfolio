import React from "react";

const PassionSection = () => {
  return (
    <section
      id="passions"
      className="bg-black text-white py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 border-b-2 border-gray-600 inline-block pb-2">
        My Passions
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300">
        <p>
          I’m deeply passionate about <span className="text-white font-medium">Digital Marketing</span> — the art of combining creativity, strategy, and data to
          communicate impactful stories. From designing engaging campaigns to exploring how content influences behavior, I love discovering the psychology behind
          what connects people to brands.
        </p>

        <p>
          Alongside this, I have a strong interest in <span className="text-white font-medium">creative storytelling, branding, and content design</span>. 
          I enjoy crafting visuals and narratives that inspire curiosity and emotion while keeping clarity and elegance at the core.
        </p>

        <p>
          My passion also extends to <span className="text-white font-medium">technology and innovation</span>. I find it exciting how digital tools evolve to shape modern
          communication — whether it’s through social platforms, AI-powered campaigns, or UI/UX improvements.
        </p>

        <p>
          My ultimate goal is to merge creativity and strategy to bring digital ideas to life — to not just market, but to *influence, engage, and inspire*.
        </p>
      </div>
    </section>
  );
};

export default PassionSection;
