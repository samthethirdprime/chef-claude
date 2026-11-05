export default function IngredientsList({ingredient, recipeShown, getRecipe}) {
    const mappedData = ingredient.map((item, idx) => (
        <li key={idx}>{item}</li>
    ));

    return (
         ingredient.length > 0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{mappedData}</ul>
                {ingredient.length > 3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Show Recipe</button>
                </div> : null}
            </section> : null
    );
}
