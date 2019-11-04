type createdAt = Date | null;

export interface UserInterface {
  access_token: string;
  token_type: string;
  expires_in: Number;
  userName: string;

}

export default function UserModel(data: any | UserInterface): UserInterface | null {
  if (!data) return null;

  return {
    access_token: data.access_token || '',
    token_type: data.token_type || '',
    expires_in: data.expires_in || '',
    userName: data.userName || ''
  }
}