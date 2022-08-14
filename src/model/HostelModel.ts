export default interface HostelModel {
  hostelName: string;
  totalCapacity: number;
  totalBooked: number;
  totalApproved: number;
  slotLeft: number;
  hostelId: string;
  price: number;
  description: String;
}

export const InitialHostelInfo: HostelModel = {
  hostelName: "",
  totalCapacity: 0,
  totalBooked: 0,
  totalApproved: 0,
  slotLeft: 0,
  price: 0,
  hostelId: "",
  description: "",
};
