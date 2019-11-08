
export interface ErrorInterface {
    error: string;
    error_description: string;
}

export default function ErrorModel(data: any | ErrorInterface): ErrorInterface | null {
    if (!data) return null;

    return {
        error: data.error || '',
        error_description: data.error_description || ''
    }
}