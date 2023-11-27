import { writable } from 'svelte/store';

interface TextInput {
    value: string;
    entryTime: Date;
    starred: boolean;
}

function createTextStore() {
    const { subscribe, set, update } = writable<TextInput[]>([]);

    return {
        subscribe,
        insert: (value: string) => {
            update((texts) => [
                ...texts,
                { value, entryTime: new Date(), starred: false }
            ]);
        },
        remove: (index: number) => {
            update((texts) => texts.filter((_, i) => i !== index));
        },
        update
    };
}

export const textStore = createTextStore();
