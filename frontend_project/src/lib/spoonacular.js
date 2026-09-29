const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

function checkApiKey() {
    if (!API_KEY) {
        throw new Error("API KEY가 설정되지 않았습니다");
    }
}

export async function getRecipesByIngredients({ ingredients }) {
    checkApiKey();

    if (!ingredients || ingredients.length === 0) {
        return [];
    }

    const uniqueIngredients = [
        ...new Set(
            ingredients
                .map((ingredient) => ingredient.trim().toLowerCase())
                .filter(Boolean),
        ),
    ];

    const params = new URLSearchParams({
        apiKey: API_KEY,
        ingredients: uniqueIngredients.join(","),
        number: "3",
        ranking: "2",
        ignorePantry: "true",
    });

    const response = await fetch(
        `${BASE_URL}/recipes/findByIngredients?${params.toString()}`,
    );

    if (!response.ok) {
        throw new Error(`Recipe API error: ${response.status}`);
    }

    const data = await response.json();

    data.sort((a, b) => {
        if (a.missedIngredientCount !== b.missedIngredientCount) {
            return a.missedIngredientCount - b.missedIngredientCount;
        }
        return b.usedIngredientCount - a.usedIngredientCount;
    });

    return data;
}

export async function getRecipeDetail(recipeId) {
    checkApiKey();

    const params = new URLSearchParams({
        apiKey: API_KEY,
        includeNutrition: "false",
    });

    const response = await fetch(
        `${BASE_URL}/recipes/${recipeId}/information?${params.toString()}`,
    );

    if (!response.ok) {
        throw new Error(`Recipe detail API error: ${response.status}`);
    }

    return response.json();
}
