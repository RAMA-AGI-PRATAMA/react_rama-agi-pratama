import React, { useState } from 'react'
import OpenAI from "openai"

function App() {
  const openai = new OpenAI({
    apiKey : "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",
    dangerouslyAllowBrowser: true,
})

    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus." + prompt,
        temperature: 0.5,
        max_tokens: 200,
      });
      setResult(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="main">
      <div className="w-[720px] mx-auto py-24">
        <div className="w-full justify-center items-center px-8">
          <form className="w-full text-center" onSubmit={handleClick}>
            <div className="md-6">
              <label 
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name">
                Katakan atau tanyakan sesuatu :
              </label>
            </div>
            <div className="py-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Tulis perintah Anda..."
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight outline outline-offset-2 outline-cyan-500 focus:bg-white ">
            </input>
            </div>
            <div className="">
              <button
                onClick={handleClick}
                disabled={loading || prompt.length === 0}
                className="shadow bg-cyan-600 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font py-2 px-4 rounded">
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </form>
          <div className="w-full items-center mt-4">
          <p className="text-justify">{result}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App


