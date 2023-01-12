import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.fonts = {
  Sarabun: {
    normal:
      "https://cdn.jsdelivr.net/npm/@openfonts/sarabun_thai@1.44.3/files/sarabun-thai-400.woff",
    bold: "https://cdn.jsdelivr.net/npm/@openfonts/sarabun_thai@1.44.3/files/sarabun-thai-700.woff",
    italics:
      "https://cdn.jsdelivr.net/npm/@openfonts/sarabun_thai@1.44.3/files/sarabun-thai-400-italic.woff",
    bolditalics:
      "https://cdn.jsdelivr.net/npm/@openfonts/sarabun_thai@1.44.3/files/sarabun-thai-700-italic.woff",
  },
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};
pdfMake.tableLayouts = {
  exampleLayout: {
    hLineWidth: function (i, node) {
      return 1;
    },
    vLineWidth: function (i, node) {
      return 1;
    },
    hLineColor: function (i, node) {
      return "#aaa";
    },
    vLineColor: function (i, node) {
      return "#aaa";
    },
    // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
    paddingLeft: function (i, node) {
      return 10;
    },
    paddingRight: function (i, node) {
      return 10;
    },
    paddingTop: function (i, node) {
      return 2;
    },
    paddingBottom: function (i, node) {
      return 2;
    },
    fillColor: function (rowIndex, node, columnIndex) {
      return "#fff";
    },
  },
};
export function invoicePDF() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  var docDefinition = {
    info: {
      title: "PDF FILE NAME",
    },
    content: [
      /// HEADER
      {
        layout: "noBorders",
        table: {
          widths: ["auto", "50%", "*"],
          body: [
            [
              {
                stack: [
                  {
                    image: "logo",
                    width: 180,
                    height: 50,
                    alignment: "center",
                    margin: [0, 0, 0, 0],
                  },
                  {
                    text: "เลขประจำตัวผู้เสียภาษีอากร",
                    alignment: "center",
                    width: "auto",
                    style: {
                      fontSize: 10,
                    },
                    margin: [0, 0, 0, 0],
                  },
                  {
                    text: "0125555015738",
                    alignment: "center",
                    style: {
                      fontSize: 10,
                    },
                    margin: [0, 0, 0, 0],
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "บริษัท บลูซี เอ็นจิเนียริ่ง จำกัด (สำนักงานใหญ่)",
                    style: "headerCompanyName",
                    margin: [0, 10, 0, 0],
                  },
                  {
                    text: "BlueC Engineering Co.,Ltd.",
                    style: "headerCompanyName",
                    margin: [0, 0, 0, 0],
                  },
                  {
                    text: "29/196 หมู่ 3 ตำบลปลายบาง อำเภอบางกรวย จังหวัดนนทบุรี\n29/196 Moo 3 T. Plaibang, A. BangKruy, Nonthaburi 11130\nTEL : 081-6181053\nEmail : marutsuralert@hotmail.com",
                    style: "headerCompanyAddress",
                    margin: [0, 0, 0, 0],
                  },
                ],
              },
              {
                stack: [
                  {
                    table: {
                      fontSize: 14,
                      alignment: "center",
                      margin: [0, 0, 0, 0],
                      body: [["ต้นฉบับลูกค้า"]],
                    },
                  },
                  {
                    text: "(เอกสารออกเป็นชุด)",
                    style: {
                      fontSize: 8,
                    },
                    alignment: "center",
                    margin: [0, 2, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
      }, /// END HEADER
      {
        text: "_______________________________________________________________________________________________________________________________________________________________",
        fontSize: 10,
        margin: [0, -11, 0, 0],
        alignment: "center",
      },
      {
        text: "_______________________________________________________________________________________________________________________________________________________________",
        fontSize: 10,
        margin: [0, -11, 0, 0],
        alignment: "center",
      },
      {
        //INVOICE TITLE
        text: "ใบแจ้งหนี้ / ใบกับกับภาษี\nINVOICE / TAX INVOICE",
        style: {
          fontSize: 12,
          bold: true,
        },
        alignment: "center",
        margin: [0, 15, 0, 0],
      }, //END OF INVOICE TITLE
      //INVOICE DETAILS
      {
        layout: "noBorders",
        table: {
          widths: ["70%", "30%"],
          body: [
            [
              {
                stack: [
                  {
                    //COLUMNS CUSTOMER
                    columns: [
                      {
                        stack: [
                          {
                            text: "ชื่อลูกค้า",
                            style: "columnsHeader",
                          },
                          {
                            text: "Customer Name",
                            style: "columnsDetail",
                          },
                        ],
                      },
                      {
                        text: "บริษทั เอก็ ซ์ซสั กรุ๊ป จำ กดั สำ นกังำนใหญ่",
                        style: "columnsDetail",
                      },
                    ],
                    columnGap: -250,
                  }, //END OF COLUMS CUSTOMER
                  {
                    //COLUMNS NUMBER OF TAXER
                    columns: [
                      {
                        text: "เลขประจำตัวผู้เสียภาษีอากร:",
                        style: "columnsHeader",
                      },
                      {
                        text: "0-1055-48111-86-7",
                        style: "columnsDetail",
                      },
                    ],
                    columnGap: -120,
                  }, //END OF COLUMNS NUMBER OF TAXER
                  {
                    //COLUMNS ADDRESS
                    columns: [
                      {
                        stack: [
                          {
                            text: "ที่อยู่",
                            style: "columnsHeader",
                          },
                          {
                            text: "Address",
                            style: "columnsDetail",
                          },
                        ],
                      },
                      {
                        text: "เลขที่77 ซอย พหลโยธิน 35 แขวงลำดยำวเขต จตุจกัร กรุงเทพมหำนคร10900 ",
                        style: "columnsDetail",
                      },
                    ],
                    columnGap: -250,
                  }, //END OF COLUMNS COLUMNS ADDRESS
                ],
              },
              {
                stack: [
                  {
                    //COLUMNS NUMBER
                    columns: [
                      {
                        stack: [
                          {
                            text: "เลขที่",
                            style: "columnsHeader",
                          },
                          {
                            text: "No.",
                            style: "columnsDetail",
                          },
                        ],
                      },
                      {
                        text: "061/2565",
                        style: "columnsHeader",
                      },
                    ],
                  }, //END OF COLUMS NUMBER
                  {
                    //COLUMNS DATE
                    columns: [
                      {
                        stack: [
                          {
                            text: "วันที่",
                            style: "columnsHeader",
                          },
                          {
                            text: "Date",
                            style: "columnsDetail",
                          },
                        ],
                      },
                      {
                        text: "23/ 09/ 2565",
                        style: "columnsHeader",
                      },
                    ],
                  }, //END OF COLUMNS DATE
                ],
              },
            ],
          ],
        },
      },
      //END OF INVOICE DETAILS
      //TABLE OF CUSTOMER DETAILS
      {
        layout: "exampleLayout",
        table: {
          widths: ["*", "*", "*", "*", "*"],
          body: [
            [
              {
                text: "รหัสลูกค้า\nCustomer Code",
                style: "tableHeader",
              },
              {
                text: "เลขที่ใบสั่งซื้อ\nP/O No.",
                style: "tableHeader",
              },
              {
                text: "ชื่อผู้สั่งซื้อ\nBuyer Name",
                style: "tableHeader",
              },
              {
                text: "เงื่อนไขการชำระเงิน\nTerms of Payment",
                style: "tableHeader",
              },
              {
                text: "วันครบกำหนดชำระ\nDueDate",
                style: "tableHeader",
              },
            ],
            [
              {
                text: "--",
                style: "tableDetail",
              },
              {
                text: "POL6509029",
                style: "tableDetail",
              },
              {
                text: "--NAME--",
                style: "tableDetail",
              },
              {
                text: "--Terms of Payment--",
                style: "tableDetail",
              },
              {
                text: "--DueDate--",
                style: "tableDetail",
              },
            ],
          ],
        },
      }, //END TABLE OF CUSTOMER DETAILS
      {
        text: " ",
      },
      //TABLE OF CUSTOMER PRODUCTS
      {
        layout: "exampleLayout",
        table: {
          widths: [25, "*", 30, 50, 80],
          body: [
            [
              {
                text: "รายการ\nItems",
                style: "tableHeader",
              },
              {
                text: "รายการสินค้าหรือบริการ\nDescription",
                style: "tableHeader",
              },
              {
                text: "จำนวน\nQuantity",
                style: "tableHeader",
              },
              {
                text: "ราคาหน่วยละ\nUnit Price",
                style: "tableHeader",
              },
              {
                text: "จำนวนเงิน\nAmount",
                style: "tableHeader",
              },
            ],
            [
              {
                text: "1",
                style: "tableDetail",
                border: [true, false, false, false],
              },
              {
                text: "ค่ำมดัจำ โคมไฟ30%ยหี่ อ้ SYLVANIA",
                style: "tableDetail",
                border: [true, false, false, false],
              },
              {
                text: "1",
                style: "tableDetail",
                border: [true, false, true, false],
              },
              {
                text: "44,346.00",
                style: "tableDetail",
                border: [true, false, true, false],
              },
              {
                text: "44,346.00",
                style: "tableDetail",
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: "1",
                style: "tableDetail",
                border: [true, false, false, false],
              },
              {
                text: "ค่ำมดัจำ โคมไฟ30%ยหี่ อ้ SYLVANIA",
                style: "tableDetail",
                border: [true, false, false, false],
              },
              {
                text: "1",
                style: "tableDetail",
                border: [true, false, true, false],
              },
              {
                text: "44,346.00",
                style: "tableDetail",
                border: [true, false, true, false],
              },
              {
                text: "44,346.00",
                style: "tableDetail",
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: " ",
                border: [true, false, false, false],
              },
              {
                text: " ",
                border: [true, false, false, false],
              },
              {
                text: "รวมราคาทั้งสิ้น\nTotal Price",
                style: "tableDetail",
                colSpan: 2,
              },
              {},
              {
                text: "44,346.00",
                style: "tableDetail",
                alignment: "center",
                fontSize: 8,
              },
            ],
            [
              {
                text: " ",
                border: [true, false, false, false],
              },
              {
                text: " ",
                border: [true, false, false, false],
              },
              {
                text: "ภาษีมูลค่าเพิ่ม\nValue Added Tax",
                style: "tableDetail",
                colSpan: 2,
              },
              {},
              {
                text: "3,104.22",
                style: "tableDetail",
                alignment: "center",
                fontSize: 8,
              },
            ],
            [
              {
                text: "สี่หมื่นเจ็ดพันสี่ร้อยห้ำสิบบาทยี่สิบสองสตางค์",
                style: "tableDetail",
                colSpan: 2,
                alignment: "center",
                fontSize: 9,
              },
              {},
              {
                text: "จำนวนเงินรวมทั้งสิ้น\nTotal Amount",
                style: "tableDetail",
                colSpan: 2,
              },
              {},
              {
                text: "47,450.22",
                style: "tableDetail",
                alignment: "center",
                fontSize: 8,
              },
            ],
          ],
        },
      }, //END TABLE OF PRODUCTS
      //SUB DETAILS
      {
        text: 'โปรดจ่ายเช็คขีดคร่อมในนาม "บริษัท บลูซี เอ็นจิเนียริ่ง จำกัด"\n\n Please issue cheque payable "BLUE C ENGINEERING CO,Ltd" and cross A/C payee Only.',
        fontSize: 8,
        margin: [0, 5, 0, 10],
      },
      //END OF SUB DETAILS
      //TABLE OF TABLE OF SIGNATURE
      {
        layout: "noBorders",
        table: {
          widths: ["80%", "*"],
          body: [
            [
              {
                columns: [
                  {
                    layout: "exampleLayout",
                    table: {
                      widths: ["*", "*"],
                      body: [
                        [
                          {
                            text: "ได้รับสินค้าข้างต้นไว้ถูกต้องเรียบร้อยแล้ว",
                            style: "tableHeader",
                            border: [true, true, true, false],
                          },
                          {
                            text: "ในนาม บริษัท บูลซี เอ็นจิเนียริ่ง จำกัด\nFor BLUE C ENGINEERING Co,Ltd.",
                            style: "tableHeader",
                            border: [true, true, true, false],
                          },
                        ],
                        [
                          {
                            text: "ลงนามผู้รับ.........................\n......../......../........",
                            style: "tableDetail",
                            border: [true, false, true, true],
                          },
                          {
                            text: ".............................................................\nผู้มีอำนาจลงนาม / Authorized Signature",
                            style: "tableDetail",
                            border: [true, false, true, true],
                          },
                        ],
                      ],
                    },
                  },
                ],
              },
              {
                stack: [
                  {
                    layout: "exampleLayout",
                    table: {
                      widths:"100%",
                      body: [
                        [
                          {
                            text: "ผู้ส่งสินค้า ..........................\nDerivered by",
                            style: "tableDetail",
                            margin: [2, 2, 2, 2],
                            alignment: 'center',
                          },
                        ],
                      ],
                    },
                  },
                  {
                    layout: "exampleLayout",
                    margin: [0, 6, 0, 0],
                    table: {
                      widths:"100%",
                      body: [
                        [
                          {
                            text: "ต้นฉบับลูกค้า",
                            fontSize: 10,
                            bold: true,
                            margin: [2, 2, 2, 2],
                            alignment: 'center',
                          },
                        ],
                      ],
                    },
                  },
                ],
              },
            ],
          ],
        },
      }, //END TABLE OF SIGNATURE
    ],
    defaultStyle: {
      font: "Sarabun",
    },
    styles: {
      headerCompanyName: {
        fontSize: 12,
        bold: true,
        margin: [10, 0, 10, 0],
      },
      headerCompanyAddress: {
        fontSize: 7,
        margin: [10, 0, 10, 0],
      },
      columnsHeader: {
        fontSize: 8,
        bold: true,
      },
      columnsDetail: {
        fontSize: 8,
        margin: [0, 0, 0, 10],
      },
      tableHeader: {
        fontSize: 8,
        alignment: "center",
        margin: [0, 2, 0, 2],
      },
      tableDetail: {
        fontSize: 7,
        alignment: "center",
        margin: [0, 2, 0, 2],
      },
    },
    images: {
      logo: "data:image/jpeg;base64,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",
    },
  };
  pdfMake.createPdf(docDefinition).open();
}
