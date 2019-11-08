
export interface LoginInterface {
    access_token: string;
    token_type: string;
    expires_in: Number;
    userName: string;
    password: string;
    checkedUser: boolean;

}

export default function LoginModel(data: any | LoginInterface): LoginInterface | null {
    if (!data) return null;

    return {
        access_token: data.access_token || '',
        token_type: data.token_type || '',
        expires_in: data.expires_in || '',
        userName: data.userName || '',
        password: data.password || '',
        checkedUser: data.checkedUser || false
    }
}