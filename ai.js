import { GoogleGenAI } from "@google/genai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.

You don't need to use every ingredient they mention. You can include additional ingredients, but try not to include too many.

Format your response in markdown to make it easier to render on a web page.
`

export async function getRecipeFromGoogle(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    })

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            config: {
                systemInstruction: SYSTEM_PROMPT
            }
        })

        return response.text

    } catch (err) {
        console.error("Gemini API error:", err)
        throw err
    }
}
