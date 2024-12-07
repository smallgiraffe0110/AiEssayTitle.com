"use client";
import { useState } from "react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables
import OpenAI from "openai";
const openai = new OpenAI();

// Initialize OpenAI client with the API key


type EssayGeneratorFormProps = {};

const EssayGeneratorForm: React.FC<EssayGeneratorFormProps> = () => {
  const [essay, setEssay] = useState(""); // Essay input
  const [tone, setTone] = useState("formal"); // Tone selection
  const [generatedEssay, setGeneratedEssay] = useState(""); // API response

  const handleSubmit = async () => {
    try {
      // OpenAI API call
      const response = await openai.chat.completions.create({
        model: "gpt-4", // GPT model
        messages: [
          {
            role: "user",
            content: `Write an essay based on the content: "${essay}" and make it ${tone}.`,
          },
        ],
      });

      // Save the response
      setGeneratedEssay(response.choices[0]?.message?.content || "No response");
    } catch (error) {
      console.error("Error generating essay:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Generate Your Essay</h2>

      {/* Essay Input */}
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Enter your essay text here..."
        className="w-full p-4 border rounded-md mb-4"
        rows={5}
      />

      {/* Tone Selector */}
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="w-full p-4 border rounded-md mb-4"
      >
        <option value="formal">Formal</option>
        <option value="informal">Informal</option>
        <option value="humorous">Humorous</option>
        <option value="optimistic">Optimistic</option>
        <option value="serious">Serious</option>
      </select>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full p-4 bg-blue-500 text-white rounded-md mb-4"
      >
        Generate Essay
      </button>

      {/* Display the response */}
      {generatedEssay && (
        <div className="mt-6 p-6 bg-gray-100 border rounded-md">
          <h3 className="text-xl font-semibold">Generated Essay:</h3>
          <p>{generatedEssay}</p>
        </div>
      )}
    </div>
  );
};

export default EssayGeneratorForm;
