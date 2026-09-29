"use client";

import { useState } from "react";
import { useFridgeStore } from "@/store/fridgeStore";

export default function IngredientForm() {
    const [name, setName] = useState("");
    const [storage, setStorage] = useState("refrigerator");
    const [quantity, setQuantity] = useState("1");
    const [unit, setUnit] = useState("ea");
    const [expirationDate, setExpirationDate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addIngredient = useFridgeStore((state) => state.addIngredient);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const ingredientName = name.trim();

        if (!ingredientName) {
            alert("재료명을 입력해주세요.");
            return;
        }

        const ingredientQuantity = Number(quantity);

        try {
            setIsSubmitting(true);

            await addIngredient({
                name: ingredientName.toLowerCase(),
                storage,
                quantity: ingredientQuantity,
                unit,
                expirationDate,
            });

            setName("");
            setStorage("refrigerator");
            setQuantity("1");
            setUnit("ea");
            setExpirationDate("");
        } catch (error) {
            alert("식재료를 추가하지 못했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="ingredient-form" onSubmit={handleSubmit}>
            <div className="form-title">
                <h2>식재료 추가</h2>

                <p>냉장고에 있는 식재료를 입력해주세요.</p>
            </div>

            <div className="form-group">
                <label htmlFor="ingredient">재료명</label>

                <input
                    id="ingredient"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="예: egg"
                    autoComplete="off"
                />

                <p className="input-help">
                    Spoonacular 검색을 위해 영어로 입력해주세요.
                </p>
            </div>

            <div className="form-group">
                <label htmlFor="storage">보관 장소</label>

                <select
                    id="storage"
                    value={storage}
                    onChange={(event) => setStorage(event.target.value)}
                >
                    <option value="refrigerator">냉장실</option>

                    <option value="freezer">냉동실</option>

                    <option value="room">실온</option>
                </select>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="quantity">수량</label>

                    <input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="unit">단위</label>

                    <select
                        id="unit"
                        value={unit}
                        onChange={(event) => setUnit(event.target.value)}
                    >
                        <option value="ea">ea</option>

                        <option value="g">g</option>

                        <option value="kg">kg</option>

                        <option value="pack">pack</option>

                        <option value="bottle">bottle</option>

                        <option value="can">can</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="expirationDate">
                    소비기한 / 유통기한
                    <span className="optional">선택</span>
                </label>

                <input
                    id="expirationDate"
                    type="date"
                    value={expirationDate}
                    onChange={(event) => setExpirationDate(event.target.value)}
                />
            </div>

            <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? "추가 중..." : "+ 식재료 추가"}
            </button>
        </form>
    );
}
