import RecipeIngredientList from "./RecipeIngredientList";

function removeHtmlTags(text) {
    if (!text) {
        return "";
    }

    return text.replace(/<[^>]*>/g, "");
}

export default function RecipeDetail({ recipe }) {
    const steps = recipe.analyzedInstructions?.[0]?.steps || [];

    return (
        <article className="recipe-detail">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-detail-image"
            />

            <div className="recipe-detail-content">
                <p className="eyebrow">RECIPE DETAIL</p>

                <h1>{recipe.title}</h1>

                <div className="recipe-meta">
                    {recipe.readyInMinutes && (
                        <span>⏱ {recipe.readyInMinutes} min</span>
                    )}

                    {recipe.servings && (
                        <span>👥 {recipe.servings} servings</span>
                    )}
                </div>

                <section className="detail-section">
                    <h2>Ingredients</h2>

                    <RecipeIngredientList
                        ingredients={recipe.extendedIngredients}
                    />
                </section>

                <section className="detail-section">
                    <h2>Instructions</h2>

                    {steps.length > 0 ? (
                        <ol className="cooking-steps">
                            {steps.map((step) => (
                                <li key={step.number}>{step.step}</li>
                            ))}
                        </ol>
                    ) : recipe.instructions ? (
                        <p className="instructions">
                            {removeHtmlTags(recipe.instructions)}
                        </p>
                    ) : (
                        <p>조리 방법 정보가 없습니다.</p>
                    )}
                </section>
            </div>
        </article>
    );
}
