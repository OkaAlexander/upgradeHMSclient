import { Download } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React, { Component } from "react";
import Images from "../resources/Images";

class NewHostelData extends Component {
  tenancyAgreement = () => {
    var tenancyAgreement: any = new jsPDF();
    const offset = 5;
    const WIDTH = tenancyAgreement.internal.pageSize.width;
    const HEIGHT = tenancyAgreement.internal.pageSize.height;
    tenancyAgreement.setFontSize(10);
    tenancyAgreement.setLineWidth(1.2);
    const logoWidth = 25;
    const logoHeight = 30;
    const currency: string = "GHS";
    tenancyAgreement.addImage(
      Images.logo,
      "jpeg",
      offset + 10,
      offset + 15,
      logoWidth,
      logoHeight
    );

    tenancyAgreement.setFontSize(14);
    tenancyAgreement.setTextColor("#058709");
    tenancyAgreement.text(
      "UNIVERSITY OF ENERGY AND NATURAL RESOURCES",
      offset + logoWidth + 22.5,
      offset + 20
    );

    tenancyAgreement.setTextColor("#000");
    tenancyAgreement.setFontSize(11);
    tenancyAgreement.text(
      "P.O Box 214, Sunyani-Ghana || Tel: +233 (352028292)",
      offset + logoWidth + 45,
      offset + 24
    );
    tenancyAgreement.setFontSize(13);
    // tenancyAgreement.text("", offset + logoWidth + 45, offset + 28);
    tenancyAgreement.setFontSize(14);
    tenancyAgreement.setFont("bold");
    tenancyAgreement.text(
      "NEW HOSTEL TENANCY AGREEMENT",
      offset + logoWidth + 45,
      offset + 37
    );

    autoTable(tenancyAgreement, {
      body: [
        [
          "THIS AGREEMENT is made the ………………………………… day of ……………………………….. BETWEEN ……………………….., the Hostel Manager for and on behalf of the University of Energy and Natural Resources, Sunyani (HEREINAFTER CALLED “UENR”) of the other part and …………………………………… (HEREINAFTER CALLED THE ”RESIDENT STUDENT”) of the other part.",
        ],

        //["Castille", "castille@example.com", "Spain"],
        // ...
      ],
      theme: "plain",
      startY: 60,
      styles: {
        fontSize: 12,
      },
    });
    autoTable(tenancyAgreement, {
      body: [
        [
          `1. ${" "}${"In consideration of the rent hereby reserved and the covenants, conditions and stipulations herein contained, UENR hereby LETS to the student a room No…………… in the Hostel situated at UENR campus (hereinafter called the “Apartment”) to hold the same as a tenant for two semesters in the ……………………… academic year paying thereof a yearly rent of ……………………………………payable in advance at the beginning of the 1st semester."}`,
        ],
        [
          `2. ${" "}${"This Agreement is subject to the willingness of Resident Student to abide by all rules governing his/her stay in the Hostel. These rules include Regulations of the University, the S.R.C constitution and any other rules and regulations covering the Hostel."}`,
        ],
      ],
      theme: "plain",
      startY: 90,
      styles: {
        fontSize: 12,
      },
    });
    autoTable(tenancyAgreement, {
      //head: [[`3${" "}"THE PARTIES HEREBY AGREE THAT`]],
      body: [
        [
          `3. ${" "}${"THE PARTIES HEREBY AGREE THAT THE RESIDENT STUDENT SHALL;"}`,
        ],
        [
          `I. ${" "}${"Pay the Hostel fees upfront, which is a sum of ………………………….. as a security to his/her accommodation in Room No………………….."}`,
        ],
        [
          `II. ${" "}${"Share the Room with three other resident students assigned by the Hostel and use the bathroom and toilet facilities in common with three person (s)."}`,
        ],
        [
          `III. ${" "}${"Keep the interior of the room in a good and tenantable condition as existing at the commencement of the tenancy."}`,
        ],
        [
          `IV. ${" "}${"Not assign or sublet the Room or any part thereof nor share the same with any unauthorized person (s)."}`,
        ],
        [
          `V. ${" "}${"Not make any alterations or additions to the Room, Hostel or the decorations,fixtures or fittings thereof."}`,
        ],
        [
          `VI. ${" "}${"Not deface the room or permit or suffer it to be defaced internally or externally."}`,
        ],
        [
          `VII. ${" "}${"Not paste any posters, handbills etc on any doors or any part of the Hostel except on the notice boards."}`,
        ],
        [
          `VIII. ${" "}${"Not permit to be done on or in connection with the Room/Apartment anything which may be or tend to be a nuisance or cause damage to the Hostel or any neighbouring or adjoining property."}`,
        ],
        [
          `IX. ${" "}${"Not throw down waste water from balcony except through the wash hand basin in the apartment."}`,
        ],
        [
          `X. ${" "}${"Keep noise level reasonably low at all times especially between the hours of 7.00 p.m. and 5.00 a.m."}`,
        ],
        [
          `XI. ${" "}${"Not keep pets of any kind in the Room/Apartment without the written consent of the Hostel."}`,
        ],
        [
          `XII. ${" "}${"Permit the Hostel Manageress to enter the Room at all reasonable time with reasonable excuse."}`,
        ],
        [
          `XIII. ${" "}${"Not transfer his/her Hostel accommodation to any other student or accept such an illegal offer under any condition or circumstance. Any student who breach this rule shall either pay a fine or be suspended for a period determinable by UENR authorities and or lose his/her residential status"}`,
        ],
        [
          `XIV. ${" "}${"Not accommodate any percher(s) in any room and shall lose their residential status if same is done."}`,
        ],
        [
          `XV. ${" "}${"Not change the lock to any room, carry out any painting or alter any fittings in any room, be it electrical, wooden or otherwise, without prior notice and consent in writing of the Hostel Authorities."}`,
        ],
        [
          `XVI. ${" "}${"Not litter the Hostel, the lanes in front of the rooms, walkways and if so found, shall be liable to the payment of a prescribed fine/or forfeiture of his/her residential status."}`,
        ],
        [
          `XVII. ${" "}${" Use only Electric Burners (Hot Plate) for cooking in the hostel premises. Gas cookers are prohibited"}`,
        ],
        [
          `XVIII. ${" "}${"Not smoke in any part of the Hostel, and if so found, shall forfeit residency."}`,
        ],
        [
          `XIX. ${" "}${"Not cause excessive and repeated noise making, rampant shouting and hooting at ladies or gentlemen. Students who persistently play their sound systems loudly shall have their systems seized, or they will be fined, or they will lose their residency."}`,
        ],
        [
          `XX. ${" "}${"Not riot, fight or create chaos and pandemonium in the Hostel. If caught in such acts, shall forfeit his/her residency. The Resident Student shall as much as possible, use the channel of communication in the Hostel to address his/her concerns."}`,
        ],
        [
          `XXI. ${" "}${"Abide by the regulations of the University, S.R.C. Constitution, the Hostel Constitution and any rules and regulations governing any part of the GETFund Hostel."}`,
        ],
        [
          `XXII. ${" "}${"Be subject to due penalties for any act of indiscipline or for flouting the above mentioned rules."}`,
        ],
        [
          `XXIII. ${" "}${"Vacate the room and remove all his/her belongings or properties at the end of each semester. The Hostel Authorities shall not be held responsible for the loss or damage of any property left in the room."}`,
        ],
        [
          `4. ${" "}${"The Hostel Authorities shall keep the Room and any other part of the Apartment which the Student is entitled to use and all plumbing works, wires, drains and installations in the Apartment in good repair and condition."}`,
        ],
        [
          `5. ${" "}${"The Resident Student shall be liable for breakages and damages made negligently, willfully and recklessly."}`,
        ],
        [
          `6. ${" "}${"Damages to a room or its content shall be reported immediately to the Hostel Manageress for the necessary repairs to be made."}`,
        ],
        [
          `7. ${" "}${"Every Resident Student shall sign a Residence Book before departure. Failure to do so will attract sanctions from the Hostel Manageress."}`,
        ],
        [
          `8. ${" "}${"Students shall not carry out commercial activities in the room, if so found they shall forfeit their residency (Commercial activities including Word processing and Printing for profit, burning of CDS and sale of any items.)"}`,
        ],
        [
          `9. ${" "}${"No Resident Student is allowed to go to the roof top without the consent in writing of the Hostel Manager."}`,
        ],
        [
          `10. ${" "}${"Student shall not steal, and if found, shall forfeit their residency."}`,
        ],
        [
          `11. ${" "}${"Students are not allowed to visit the opposite sex after 10:00pm."}`,
        ],
        [
          `12. ${" "}${"Students shall clean their bathroom and toilet facilities periodically"}`,
        ],
        [
          `13. ${" "}${"Students are not allowed to dry their clothes, shoes and other items on the walls and the balconies."}`,
        ],
        [
          `14. ${" "}${"No student is allowed to bring any of the class room furniture to the hostel."}`,
        ],
        [
          `15. ${" "}${"The Resident Student declares that any indiscipline on his/her part or flouting of the above mentioned rules shall result in due penalties for the offence."}`,
        ],
        ["Signed by Resident Student:…………………......Date:…………………"],
        ["Name: ………………………………………"],
        [""],
        ["Witness by:(Must be your roommate)"],
        ["Name:…………………………"],
        ["PhoneNumber:…………………………"],
        ["Index/Ref No:.........."],
        [""],
        ["Hostel Manager"],
        ["Name:..................."],
        ["Signature:..................."],
        ["Date:..................."],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],
        [""],

        // ...
      ],
      theme: "plain",
      startY: 140,
      styles: {
        fontSize: 12,
      },
    });
    tenancyAgreement.addImage(
      Images.logo,
      "jpeg",
      offset + 10,
      offset + 15,
      logoWidth,
      logoHeight
    );
    tenancyAgreement.setFontSize(14);
    tenancyAgreement.setTextColor("#058709");
    tenancyAgreement.text(
      "UNIVERSITY OF ENERGY AND NATURAL RESOURCES",
      offset + logoWidth + 22.5,
      offset + 20
    );

    tenancyAgreement.setTextColor("#000");
    tenancyAgreement.setFontSize(11);
    tenancyAgreement.text(
      "P.O Box 214, Sunyani-Ghana || Tel: +233 (352028292)",
      offset + logoWidth + 45,
      offset + 24
    );
    tenancyAgreement.setFontSize(11);
    tenancyAgreement.text("New Hostel ", offset + logoWidth + 45, offset + 28);
    tenancyAgreement.setFontSize(14);
    tenancyAgreement.setFont("bold");
    tenancyAgreement.text(
      "PENALTIES/OFFENCES AND CHARGES",
      offset + logoWidth + 45,
      offset + 37
    );

    autoTable(tenancyAgreement, {
      //styles: { fillColor: [255, 0, 0] },
      styles: {
        fontSize: 12,
        lineWidth: 0.2,
        lineColor: "#000",
        minCellHeight: 5,
        cellPadding: 2,
        overflow: "visible",
        cellWidth: "auto",
        fontStyle: "normal",
        textColor: "#000",
      },
      //columnStyles: { 0: { halign: "center", fillColor: [0, 255, 0] } },
      margin: { top: 10 },
      head: [["No", "OFFENCES", "CHARGES/PENALTIES"]],
      body: [
        ["1", "Change of locks without consent", "GHS 200.00"],
        [
          "2",
          "Transfer of interest to other person(s) without consent",
          "Pay a fine and forfeit Residency",
        ],
        ["3", "Alteration of fittings", `${currency} 200.00`],
        [
          "4",
          "Painting or Defacing room or any part of the Hostel",
          "GHS200.00",
        ],
        ["5", "Littering the Hostel or its surroundings", "GHS100.00"],
        ["6", "Smoking in any part of the Hostel", "Forfeit Residency"],
        ["7", "Stealing", "Forfeit Residency"],
        ["8", "Carrying out commercial activities", "Forfeit Residency"],
        ["9", "Fighting, rioting, chaos", "Forfeit Residency"],
        ["10", "Making excessive Noise", "GHS 200.00"],
        ["11", "Breakages/Damages", "Charge per item"],
        ["12", "Failure to sign Residence Book", "GHS 100.00"],
        ["13", "Entry into the roof top (Polytank Area)", "GHS 100.00"],
        ["14", "Throwing down waste water through the balcony", "GHS 100.00"],
      ],
      theme: "striped",
    });
    tenancyAgreement.save("tenancyAgreement.pdf");
  };
  render() {
    return (
      <Box>
        <Button
          onClick={this.tenancyAgreement}
          sx={(theme) => ({
            margin: theme.spacing(1, 0),
            textTransform: "none",
            background: "transparent",
            color: "#59b379",
          })}
          size="small"
          fullWidth
          variant="contained"
        >
          <Download />
          TENANCY AGREEMENT
        </Button>
      </Box>
    );
  }
}
export default NewHostelData;
