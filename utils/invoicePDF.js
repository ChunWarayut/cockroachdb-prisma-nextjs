import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function invoicePDF() {
  const docDefinition = {
    info: {
      title: "PDF",
    },
    content: [
      {
        image: "logo",
        width: 100,
        height: 100,
      },
      {
        text: "บริษัท บลูซี เอ็นจิเนียริ่ง จำกัด",
        style: "subheader",
      },
      "The following table has nothing more than a body array",
      {
        style: "tableExample",
        table: {
          body: [
            ["Column 1", "Column 2", "Column 3"],
            ["One value goes here", "Another one here", "OK?"],
          ],
        },
      },
    ],
    images: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png',
      }
  };
  pdfMake.createPdf(docDefinition).open();
}
