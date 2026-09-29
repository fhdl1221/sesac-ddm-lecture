import IngredientCard from "./IngredientCard";

export default function IngredientList({ ingredients }) {
    if (ingredients.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">🥣</div>

                <h3>냉장고가 비어 있어요.</h3>

                <p>식재료를 추가해보세요.</p>
            </div>
        );
    }

    return (
        <div className="ingredient-list">
            {ingredients.map((ingredient) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
        </div>
    );
}
