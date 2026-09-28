import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePersistStore = create(
    persist(
        // 미들웨어
        (set) => ({
            theme: "light",
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === "light" ? "dark" : "light",
                })),
        }),
        { name: "theme-storage" }, // localStorgae에 저장할 때 사용할 키 이름. 위에 set => 다음 부분에 있는 값들(theme)을 저장함
    ),
);
