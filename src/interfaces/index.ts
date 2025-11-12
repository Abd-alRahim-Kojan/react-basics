export interface IUserData {
  username: string;
  email: string;
  password: string;
  address: string;
}

export interface IFormInput {
  label: string;
  type: string;
  id: string;
  name: keyof IUserData;
}
