const API_URL = process.env.NEXT_PUBLIC_JSON_SERVER_URL;

const INGREDIENT_URL = `${API_URL}/ingredients`;

async function handleResponse(response) {
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
}

// 식재료 조회
export async function getIngredients() {
    const response = await fetch(INGREDIENT_URL);

    return handleResponse(response);
}

// 식재료 추가
export async function createIngredient(ingredient) {
    const response = await fetch(INGREDIENT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredient),
    });

    return handleResponse(response);
}

// 식재료 수정
export async function updateIngredient(id, data) {
    const response = await fetch(`${INGREDIENT_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return handleResponse(response);
}

// 식재료 삭제
export async function deleteIngredient(id) {
    const response = await fetch(`${INGREDIENT_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Delete failed: ${response.status}`);
    }
}
