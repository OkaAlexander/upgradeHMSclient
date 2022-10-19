import { Box, Button, IconButton } from "@mui/material";
import jsPDF from "jspdf";
import React from "react";
import { FcPrint } from "react-icons/fc";
import { useReactToPrint } from "react-to-print";
import react, { PureComponent } from "react";

interface IProps {
  dataRef: any;
}
// export default function ExportToPdf({ dataRef }: IProps) {
//   const handlePrintToPdf = useReactToPrint({
//     content: () => dataRef
//   });
//   return (
//     <Box>
//       <IconButton onClick={handlePrintToPdf} size="small">
//         <FcPrint />
//       </IconButton>
//       <div ref={dataRef} hidden={false} />
//     </Box>
//   );
// }
export default class pdfGenerator extends PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  jsPDFGenerator = () => {
    var doc: any = new jsPDF("p", "pt");
    doc.text(20, 20, "print content here....");
    doc.save("TenancyAgreement.pdf");
  };
  render() {
    return <Button onClick={this.jsPDFGenerator}>Download</Button>;
  }
}
