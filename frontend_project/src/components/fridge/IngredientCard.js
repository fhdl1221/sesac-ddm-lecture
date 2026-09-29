"use client";
import { useFridgeStore } from "@/store/fridgeStore";

function getRemainingDays(expirationDate) {
    if (!expirationDate) {
        return null;
    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const expiration = new Date(`${expirationDate}T00:00:00`);

    const difference = expiration.getTime() - today.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

function getIngredientEmoji(name) {
    const value = name.toLowerCase();

    if (value.includes("egg")) return "🥚";

    if (value.includes("potato")) return "🥔";

    if (value.includes("onion")) return "🧅";

    if (value.includes("garlic")) return "🧄";

    if (value.includes("carrot")) return "🥕";

    if (value.includes("tomato")) return "🍅";

    if (value.includes("chicken")) return "🍗";

    if (value.includes("beef") || value.includes("pork")) {
        return "🥩";
    }

    if (value.includes("milk")) return "🥛";

    if (value.includes("cheese")) return "🧀";

    if (value.includes("shrimp")) return "🦐";

    return "🥣";
}

function getStorageLabel(storage) {
    const labels = {
        refrigerator: "냉장실",
        freezer: "냉동실",
        room: "실온",
    };

    return labels[storage] || storage;
}

export default function IngredientCard({ ingredient }) {
    const updateQuantity = useFridgeStore((state) => state.updateQuantity);
    const removeIngredient = useFridgeStore((state) => state.removeIngredient);
    const remainingDays = getRemainingDays(ingredient.expirationDate);

    const handleQuantityChange = async (amount) => {
        try {
            await updateQuantity(ingredient.id, amount);
        } catch (error) {
            alert("수량을 수정하지 못했습니다.");
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm(
            `${ingredient.name} 삭제할까요?`,
        );

        if (!confirmed) {
            return;
        }

        try {
            await removeIngredient(ingredient.id);
        } catch (error) {
            alert("식재료를 삭제하지 못했습니다.");
        }
    };

    return (
        <article className="ingredient-card">
            <div className="ingredient-image">
                <span>{getIngredientEmoji(ingredient.name)}</span>
            </div>

            <div className="ingredient-info">
                <h3>{ingredient.name}</h3>

                <p className="ingredient-storage">
                    {getStorageLabel(ingredient.storage)}
                </p>

                {remainingDays !== null && (
                    <p
                        className={
                            remainingDays <= 3
                                ? "expiration warning"
                                : "expiration"
                        }
                    >
                        {remainingDays > 0 && `D-${remainingDays}`}

                        {remainingDays === 0 && "D-Day"}

                        {remainingDays < 0 && "기한 지남"}
                    </p>
                )}
            </div>

            <div className="quantity-control">
                <button
                    type="button"
                    disabled={ingredient.quantity <= 1}
                    onClick={() => handleQuantityChange(-1)}
                >
                    −
                </button>

                <span>
                    {ingredient.quantity} {ingredient.unit}
                </span>

                <button type="button" onClick={() => handleQuantityChange(1)}>
                    +
                </button>
            </div>

            <button
                type="button"
                className="delete-button"
                onClick={handleDelete}
                aria-label={`${ingredient.name} 삭제`}
            >
                🗑
            </button>
        </article>
    );
}
