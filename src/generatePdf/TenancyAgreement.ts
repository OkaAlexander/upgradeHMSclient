import react, { PureComponent } from "react";
import jsPDF from "jspdf";

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
}
