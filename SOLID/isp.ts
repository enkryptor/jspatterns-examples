interface Lifecycle {
    onMounted(): void;
    onUpdated(): void;
    onDestroy(): void;
}

class CardComponent implements Lifecycle { /* ... */ }
























interface OnMounted {
    onMounted(): void;
}

interface OnUpdated {
    onUpdated(): void;
}

class CardComponent implements OnMounted, OnUpdated { /* ... */ }








interface Card {
    title: string;
    data: Record<string, string>[];
    index: number;
}
