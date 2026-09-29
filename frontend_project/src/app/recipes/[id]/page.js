"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import RecipeDetail from "@/components/recipe/RecipeDetail";
import { getRecipeDetail } from "@/lib/spoonacular";

export default function RecipeDetailPage() {
    const params = useParams();
    const recipeId = Number(params.id);
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchRecipe = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await getRecipeDetail(recipeId);

                setRecipe(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }

                console.error(error);

                setError("레시피 상세 정보를 불러오지 못했습니다.");
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        fetchRecipe();

        return () => {
            controller.abort();
        };
    }, [recipeId]);

    if (isLoading) {
        return (
            <main className="page">
                <div className="loading">레시피를 불러오는 중...</div>
            </main>
        );
    }

    if (error || !recipe) {
        return (
            <main className="page">
                <div className="error-state">
                    <h2>레시피를 찾을 수 없어요.</h2>

                    <p>{error || "레시피 정보가 없습니다."}</p>

                    <Link href="/recipes" className="secondary-button">
                        레시피 목록으로
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="back-link-wrapper">
                <Link href="/recipes" className="back-link">
                    ← 오늘 뭐 먹지?
                </Link>
            </div>

            <RecipeDetail recipe={recipe} />
        </main>
    );
}
