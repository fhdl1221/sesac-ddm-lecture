const tabs = [
    {
        value: "all",
        label: "전체보기",
    },
    {
        value: "refrigerator",
        label: "냉장고",
    },
    {
        value: "freezer",
        label: "냉동고",
    },
    {
        value: "room",
        label: "실온",
    },
];

export default function StorageTabs({ selectedStorage, onChange }) {
    return (
        <div className="storage-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    type="button"
                    className={
                        selectedStorage === tab.value
                            ? "storage-tab active"
                            : "storage-tab"
                    }
                    onClick={() => onChange(tab.value)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
