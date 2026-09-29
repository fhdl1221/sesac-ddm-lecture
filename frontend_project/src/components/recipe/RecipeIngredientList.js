export default function RecipeIngredientList({ ingredients }) {
    if (!ingredients || ingredients.length === 0) {
        return <p>재료 정보가 없습니다.</p>;
    }

    return (
        <ul className="recipe-ingredients">
            {ingredients.map((ingredient, index) => (
                <li key={`${ingredient.id || ingredient.name}-${index}`}>
                    <strong>{ingredient.original}</strong>

                    {ingredient.name && <span>{ingredient.name}</span>}
                </li>
            ))}
        </ul>
    );
}
