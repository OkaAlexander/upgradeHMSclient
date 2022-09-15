export default interface PrivateHostelModel {
  id: string;
  hostelName: string;
  description: string;
  image: string;
  contact1: string;
  contact2: string;
  location: string;
  status: number;
  price: number;
}
export const InitialPrivateHostelInfo: PrivateHostelModel = {
  id: "",
  hostelName: "",
  description: "",
  image: "",
  contact1: "",
  contact2: "",
  status: 0,
  location: "",
  price: 0,
};
