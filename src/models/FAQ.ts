
export interface FAQInterface {
    title: string;
}

export default function UserModel(data: any | FAQInterface): FAQInterface | null {
    if (!data) return null;

    return {
        title: data.title || ''
    };
}
