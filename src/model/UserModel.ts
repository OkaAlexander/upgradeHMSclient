export default interface UserModel {
  role: number;
  id: string;
  name: string;
  phone: string;
  email: string;
  status: number;
}

export const UserModelInfo: UserModel = {
  role: 0,
  id: "",
  status: 0,
  email: "",
  phone: "",
  name: "",
};
