"use client";
import { useState } from "react";
import OpenAI from "openai";
import ToneSelector from "./ToneSelector";
import Slider from "./Slider";

const openai = new OpenAI({
  organization: "org-A48iEvLPTN3BFf2bF8PSEHHN",
  project: "proj_5EQ6kUG5AHZy8VoamNGPHLKr",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true,
});

const EssayGeneratorForm: React.FC = () => {
  const [essay, setEssay] = useState(""); // Essay input
  const [charCount, setCharCount] = useState(0); // Character count
  const [tone, setTone] = useState("formal"); // Tone selection
  const [sliderValue, setSliderValue] = useState(1); // Slider value
  const [generatedEssay, setGeneratedEssay] = useState(""); // API response
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [isInvalid, setIsInvalid] = useState(false); // Input validity

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handleEssayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setEssay(text);
    setCharCount(text.length); // Update character count
    if (text.length >= 100) {
      setIsInvalid(false); // Clear invalid state if character limit is met
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (charCount < 100) {
      setError("Essay must be at least 100 characters.");
      setIsInvalid(true);
      return;
    }

    setError("");
    setIsInvalid(false);
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Write "${sliderValue}" essay titles based on the content: "${essay}" and make it ${tone}. do not include bold or ** in your response. Start with number one and list essay titles as specified above. If there is no content in this prompt `,
          },
        ],
      });

      setGeneratedEssay(response.choices[0]?.message?.content || "No response");
    } catch (error) {
      console.error("Error generating essay:", error);
      setError("Failed to generate essay titles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md mb-4">
      <h2 className="text-2xl font-semibold mb-4">Generate Your Essay Titles</h2>

      {/* Essay Input */}
      <textarea
        value={essay}
        onChange={handleEssayChange}
        placeholder="Enter your essay text here..."
        className={`w-full p-4 border rounded-md ${
          isInvalid ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"
        }`}
        rows={5}
      />
      <div className="mt-0 text-gray-600 text-sm">Characters: {charCount}</div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

      {/* Tone Selector and Slider */}
      <div className="flex flex-col gap-4 mt-4">
        <Slider onValueChange={handleSliderChange} />
        <ToneSelector value={tone} onChange={(e) => setTone(e.target.value)} />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full p-3 rounded-md mb-4 ${isLoading ? "bg-gray-400" : "bg-indigo-500 text-white"}`}
      >
        {isLoading ? "Generating..." : "Generate Titles"}
      </button>

      {/* Display the Response */}
      {generatedEssay && (
        <div className="mt-6 p-6 bg-gray-100 border rounded-md">
          <h3 className="text-xl font-semibold">Generated Titles:</h3>
          <p>{generatedEssay}</p>
        </div>
      )}
    </div>
  );
};

export default EssayGeneratorForm;
