import { useState } from 'react'
import Recipe from './claudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'




export default function Main() {

    const [ingredient, setIngredient] = useState([])

    const [recipeShown, setrecipeShown] = useState(false)

    const [recipe, setRecipe] = useState("")




    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        if (!newIngredient?.trim()) return

        setIngredient(prevIngredient => [
            ...prevIngredient,
            newIngredient.trim()
        ])
    }

  async function getRecipe() {
    const response = await fetch("/api/recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ingredients: ingredient
        })
    })

    const data = await response.json()

    setRecipe(data.recipe)
     setrecipeShown(true)
}
    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>

            </form>
            <IngredientsList
             ingredient={ingredient}
             recipeShown={recipeShown}
             getRecipe={getRecipe}

             />

           <Recipe
           show = {recipeShown}
           recipe={recipe}
           />
        </main>
    )
}
