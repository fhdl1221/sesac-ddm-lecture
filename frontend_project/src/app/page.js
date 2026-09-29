"use client";

import { useEffect, useMemo, useState } from "react";

import StorageTabs from "@/components/fridge/StorageTabs";
import IngredientForm from "@/components/fridge/IngredientForm";
import IngredientList from "@/components/fridge/IngredientList";

import { useFridgeStore } from "@/store/fridgeStore";

export default function HomePage() {
    const ingredients = useFridgeStore((state) => state.ingredients);
    const isLoading = useFridgeStore((state) => state.isLoading);
    const error = useFridgeStore((state) => state.error);
    const loadIngredients = useFridgeStore((state) => state.loadIngredients);

    const [selectedStorage, setSelectedStorage] = useState("all");

    useEffect(() => {
        loadIngredients();
    }, [loadIngredients]);

    const filteredIngredients = useMemo(() => {
        if (selectedStorage === "all") {
            return ingredients;
        }

        return ingredients.filter(
            (ingredient) => ingredient.storage === selectedStorage,
        );
    }, [ingredients, selectedStorage]);

    return (
        <main className="page">
            <section className="page-header">
                <p className="eyebrow">MY FRIDGE</p>

                <h1>내 냉장고</h1>

                <p>냉장고 속 식재료를 관리해보세요.</p>
            </section>

            {error && <div className="error-banner">{error}</div>}

            <section className="fridge-layout">
                <aside>
                    <IngredientForm />
                </aside>

                <section className="fridge-content">
                    <StorageTabs
                        selectedStorage={selectedStorage}
                        onChange={setSelectedStorage}
                    />

                    <div className="ingredient-count">
                        {isLoading
                            ? "불러오는 중..."
                            : `총 ${filteredIngredients.length}개`}
                    </div>

                    <IngredientList ingredients={filteredIngredients} />
                </section>
            </section>
        </main>
    );
}
