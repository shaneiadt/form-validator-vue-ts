export interface Field {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    validation?: {
        html: [
            {
                attribute: string,
                value?: string
            }
        ],
        validate?: () => boolean
    };
}