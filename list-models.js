import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

async function listModels() {
    try {
        const models = await ai.models.list({
            config: {
                pageSize: 100
            }
        })

        console.log("\nMODELS AVAILABLE TO YOUR API KEY:\n")

        for await (const model of models) {
            console.log(
                model.name,
                "|",
                model.supportedActions?.join(", ")
            )
        }

    } catch (error) {
        console.error("Could not retrieve models:", error)
    }
}

listModels()
