import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import FeatureBox from "@/components/custom/FAQbox";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Paste your Essay 
        </h1>
        <Square/>
        
      </div>

      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          <h2 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>Frequently Asked Questions</h2>
      </div>
      <div className="z-10 w-full max-w-3xl px-5 xl:px-0 animate-fade-up bg-gradient-to-br" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }} >
      <FeatureBox 
          title="What is this tool?" 
          description="This tool helps you generate essay titles automatically using AI technology." 
          icon="fas fa-question-circle"
        />
        <FeatureBox 
          title="How accurate are the titles?" 
          description="The titles are generated based on your input and the context, ensuring relevance and quality." 
          icon="fas fa-bullseye"
        />
        <FeatureBox 
          title="Can I save my titles?" 
          description="Yes, you can save your favorite titles for later use." 
          icon="fas fa-save"
        />
        <FeatureBox 
          title="Is it available on mobile?" 
          description="Yes, the app is fully responsive and works on all devices." 
          icon="fas fa-mobile-alt"
        />
        <FeatureBox 
          title="Can I use multiple languages?" 
          description="Yes, we support multiple languages for generating titles." 
          icon="fas fa-language"
        />
        <FeatureBox 
          title="How do I contact support?" 
          description="You can contact support through the 'Contact Us' page or via email." 
          icon="fas fa-headset"
        />
      </div>
    </>
  );
}

