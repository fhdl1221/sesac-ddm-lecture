"use client";

import { useEffect, useState } from "react";
import RecipeGrid from "@/components/recipe/RecipeGrid";
import { getRecipesByIngredients } from "@/lib/spoonacular";
import { useFridgeStore } from "@/store/fridgeStore";

export default function RecipesPage() {
    const ingredients = useFridgeStore((state) => state.ingredients);
    const loadIngredients = useFridgeStore((state) => state.loadIngredients);

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadIngredients();
    }, [loadIngredients]);

    // 식재료가 변경되면 레시피 다시 조회
    useEffect(() => {
        if (ingredients.length === 0) {
            setRecipes([]);
            return;
        }

        const controller = new AbortController();

        const fetchRecipes = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const ingredientNames = ingredients.map(
                    (ingredient) => ingredient.name,
                );

                const data = await getRecipesByIngredients({
                    ingredients: ingredientNames,
                });

                setRecipes(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }

                console.error(error);

                setError("레시피를 불러오지 못했습니다.");
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        fetchRecipes();

        return () => {
            controller.abort();
        };
    }, [ingredients]);

    if (isLoading) {
        return (
            <main className="page">
                <section className="page-header">
                    <p className="eyebrow">TODAY&apos;S MENU</p>

                    <h1>오늘 뭐 먹지?</h1>

                    <p>냉장고 재료를 기준으로 레시피를 찾고 있어요.</p>
                </section>

                <div className="loading">🍳 레시피를 찾고 있어요...</div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="page">
                <div className="error-state">
                    <h2>문제가 발생했어요.</h2>

                    <p>{error}</p>

                    <button
                        type="button"
                        className="primary-button small"
                        onClick={() => window.location.reload()}
                    >
                        다시 시도
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="page">
            <section className="page-header">
                <p className="eyebrow">TODAY&apos;S MENU</p>

                <h1>오늘 뭐 먹지?</h1>

                <p>냉장고에 있는 재료를 활용할 수 있는 레시피입니다.</p>
            </section>

            {ingredients.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">🥣</div>

                    <h3>냉장고가 비어 있어요.</h3>

                    <p>먼저 식재료를 추가해주세요.</p>
                </div>
            ) : recipes.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">😢</div>

                    <h3>레시피를 찾지 못했어요.</h3>

                    <p>다른 재료를 추가해보세요.</p>
                </div>
            ) : (
                <RecipeGrid recipes={recipes} />
            )}
        </main>
    );
}
