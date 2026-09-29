"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
    getIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient,
} from "@/lib/fridgeApi";

export const useFridgeStore = create(
    persist(
        (set, get) => ({
            ingredients: [],
            isLoading: false,
            error: null,

            // GET
            loadIngredients: async () => {
                set({
                    isLoading: true,
                    error: null,
                });

                try {
                    const data = await getIngredients();

                    set({
                        ingredients: data,
                    });
                } catch (error) {
                    console.error(error);

                    set({
                        error: "냉장고 정보를 불러오지 못했습니다.",
                    });
                } finally {
                    set({
                        isLoading: false,
                    });
                }
            },

            // POST
            addIngredient: async (ingredient) => {
                set({
                    error: null,
                });

                try {
                    const newIngredient = await createIngredient(ingredient);

                    set((state) => ({
                        ingredients: [...state.ingredients, newIngredient],
                    }));

                    return newIngredient;
                } catch (error) {
                    console.error(error);

                    set({
                        error: "식재료를 추가하지 못했습니다.",
                    });

                    throw error;
                }
            },

            // PATCH
            updateQuantity: async (id, quantity) => {
                const ingredient = get().ingredients.find(
                    (item) => item.id === id,
                );

                if (!ingredient) {
                    return;
                }

                const newQuantity = Math.max(1, ingredient.quantity + quantity);

                try {
                    const updatedIngredient = await updateIngredient(id, {
                        quantity: newQuantity,
                    });

                    set((state) => ({
                        ingredients: state.ingredients.map((item) =>
                            item.id === id ? updatedIngredient : item,
                        ),
                    }));
                } catch (error) {
                    console.error(error);

                    set({
                        error: "수량을 수정하지 못했습니다.",
                    });

                    throw error;
                }
            },

            // DELETE
            removeIngredient: async (id) => {
                try {
                    await deleteIngredient(id);

                    set((state) => ({
                        ingredients: state.ingredients.filter(
                            (item) => item.id !== id,
                        ),
                    }));
                } catch (error) {
                    console.error(error);

                    set({
                        error: "식재료를 삭제하지 못했습니다.",
                    });

                    throw error;
                }
            },
        }),
        {
            name: "fridge-storage",

            partialize: (state) => ({
                ingredients: state.ingredients,
            }),
        },
    ),
);
