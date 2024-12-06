import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import FAQBox from "@/components/custom/FAQbox";
import '@fortawesome/fontawesome-free/css/all.min.css';
import FeatureBox from "@/components/custom/Featurebox";
import FeaturesSection from "@/components/custom/FeaturesSection";
export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

    const Square = () => {
      return (
          <div 
              style={{
                  width: 600, 
                  height: 500, 
                  borderRadius: '25px'
              }}
          ></div>
      );
  };
  

  return (
    <>
      
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-neutral-800 px-7 py-2 transition-colors hover:bg-neutral-600">
          <p className="text-sm font-semibold text-[#ffffff]">
            Generate Essay Titles Automatically with AI
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Paste your Essay 
        </h1>
      </div>



      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <h2 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>Features</h2>
      </div>
     

      <section className=" z-10 p-8 animate-fade-up bg-gradient-to-br" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
      <FeaturesSection>
        <FeatureBox
          title="Fast Performance"
          description="Zoom! Our platform loads faster than a race car on a straightaway. Forget the wait — just pure, lightning-fast speed for all your needs!"
          icon="fas fa-rocket"
        />

        <FeatureBox
          title="Secure"
          description="Your data is locked up tighter than a vault at Fort Knox! No sneaky hackers will ever get through. Its like a security guard, but way cooler and faster!"
          icon="fas fa-lock"
        />

        <FeatureBox
          title="User Friendly"
          description="So simple, even your dog could use it (if he had thumbs). Navigating our platform is a breeze — intuitive design that makes everything click!"
          icon="fas fa-smile"
        />

        <FeatureBox
          title="Perfect Length"
          description="Say goodbye to titles that are too long or too short! Our tool ensures your essay title is just the right length every time."
          icon="fas fa-ruler"
        />

        <FeatureBox
          title="Reliable"
          description="Like your friend who never cancels plans. Our platform is consistant with top regular backups, so you never have to worry about a thing."
          icon="fas fa-cogs"
        />

        <FeatureBox
          title="Customizable"
          description="Personalize your essay titles tone with ease! Choose from a variety of styles — whether you want it formal, playful, or anything in between, its all in your hands."
          icon="fas fa-sliders-h"
        />

        
      </FeaturesSection>
    </section>
      
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <h2 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>Frequently Asked Questions</h2>
      </div>
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0 animate-fade-up bg-gradient-to-br" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }} >
      <FAQBox 
          title="What is this tool?" 
          description="This tool helps you generate essay titles automatically using AI technology." 
          icon="fas fa-question-circle"
        />
        <FAQBox 
          title="How accurate are the titles?" 
          description="The titles are generated based on your input and the context, ensuring relevance and quality." 
          icon="fas fa-bullseye"
        />
        <FAQBox 
          title="Can I save my titles?" 
          description="Yes, you can save your favorite titles for later use." 
          icon="fas fa-save"
        />
        <FAQBox 
          title="Is it available on mobile?" 
          description="Yes, the app is fully responsive and works on all devices." 
          icon="fas fa-mobile-alt"
        />
        <FAQBox 
          title="Can I use multiple languages?" 
          description="Yes, we support multiple languages for generating titles." 
          icon="fas fa-language"
        />
        <FAQBox 
          title="How do I contact support?" 
          description="You can contact support through the 'Contact Us' page or via email." 
          icon="fas fa-headset"
        />
      </div>
    </>
  );
}

