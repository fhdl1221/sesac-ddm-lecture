import Link from "next/link";

export default function RecipeCard({ recipe }) {
    return (
        <article className="recipe-card">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
            />

            <div className="recipe-card-content">
                <h2>{recipe.title}</h2>

                <div className="recipe-stats">
                    <div className="recipe-stat used">
                        <span>보유 재료</span>

                        <strong>{recipe.usedIngredientCount}개</strong>
                    </div>

                    <div className="recipe-stat missed">
                        <span>부족한 재료</span>

                        <strong>{recipe.missedIngredientCount}개</strong>
                    </div>
                </div>

                <Link
                    href={`/recipes/${recipe.id}`}
                    className="secondary-button"
                >
                    상세 정보 보기
                </Link>
            </div>
        </article>
    );
}
