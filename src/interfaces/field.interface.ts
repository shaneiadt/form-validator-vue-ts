export interface Field {
    label: string;
    id: string;
    title?: string;
    type?: string;
    placeholder?: string;
    validation?: {
        html: HTMLAttribute[],
        validate?: () => boolean
    };
}

interface HTMLAttribute {
    attribute: string,
    value?: string
}