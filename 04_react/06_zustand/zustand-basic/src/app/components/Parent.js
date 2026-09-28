import { useStore } from "@/store/useStore";
import Child from "./Child";

export default function Parent() {
    const { count, text } = useStore();
    return (
        <>
            <h1>Parent Count: {count}</h1>
            <p>Parent Text: {text}</p>
            <Child />
        </>
    );
}
