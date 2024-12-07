import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt, tone } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  
  // Create the prompt based on the user's tone
  const fullPrompt = `${prompt} Write it in a ${tone} tone.`;

  // OpenAI API request
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: fullPrompt,
      max_tokens: 3000,  // Adjust max tokens as necessary
      temperature: 0.7,  // Adjust temperature as necessary
    }),
  });

  const data = await response.json();
  
  return NextResponse.json({ generatedEssay: data.choices[0]?.text?.trim() || "Sorry, I couldn't generate an essay." });
}
