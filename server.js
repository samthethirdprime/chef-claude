import express from "express"
import dotenv from "dotenv"
import { getRecipeFromGoogle } from "./ai.js"

dotenv.config({ path: ".env.local" })

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" })
})

app.post("/api/recipe", async (req, res) => {
    try {
        const { ingredients } = req.body

        if (!Array.isArray(ingredients) || ingredients.length === 0) {
            return res.status(400).json({
                error: "Please provide a list of ingredients."
            })
        }

        const recipe = await getRecipeFromGoogle(ingredients)

        res.json({ recipe })

    } catch (err) {
        console.error(err)

        res.status(500).json({
            error: "Failed to generate recipe."
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
