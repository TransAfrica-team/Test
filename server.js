const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/", (req, res) => {
  console.log("WORKING");

  res.json({
    success: true,
    status: 200,
    data: {},
    message: "SUccess",
  });
});

app.post("/request", (req, res) => {
//   const data =
//     '<?xml version="1.0" encoding="utf-8"?>\r\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n  <soap:Body>\r\n    <LiveAirtime xmlns="http://ravasvend.co.za/">\r\n      <req>\r\n        <msisdn>"0815854635"</msisdn>\r\n        <network>"TELKOM"</network>\r\n        <topupType>"AIRTIME"</topupType>\r\n        <purchaseValue>5.00</purchaseValue>\r\n        <tender>\r\n"TEST"\r\n        </tender>\r\n        <receiptFormat>EN_UNFORMATED</receiptFormat>\r\n        <terminalChannel>"WEB"</terminalChannel>\r\n        <terminalCompanyName>"TRANS AFRICA"</terminalCompanyName>\r\n        <terminalOperator>"TEST"</terminalOperator>\r\n      </req>\r\n    </LiveAirtime>\r\n  </soap:Body>';

//   const config = {
//     method: "post",
//     url: "https://desertretail.co.za:19001/Service.asmx?op=LiveAirtime",
//     headers: {
//       "Content-Type": "text/xml",
//     },
//     data: data,
//   };

  // axios(config)
  //   .then(function (response) {
  //     res.status(200).json({
  //       success: true,
  //       status: 200,
  //       data: response.data,
  //       message: "Success",
  //     });
  //   })
  //   .catch(function (error) {
  //       res.status(400).json({
  //           success: false,
  //           status: 400,
  //           data: error,
  //           message: "Error",
  //         });
  //   });

  let xmls='<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
  <soap:Body>\
    <LiveAirtime xmlns="http://ravasvend.co.za/">\
      <req>\
      <terminalMsgID>?</terminalMsgID>\
            <terminalID>?</terminalID>\
            <msgID>?</msgID>\
            <authCred>\
               <opName>TRANS_AFRICA</opName>\
               <password>Tr@nsT3stPass</password>\
            </authCred>\
      <msisdn>0815854635</msisdn>\
      </req>\
    </LiveAirtime>\
  </soap:Body>\
</soap:Envelope>';

axios.post('https://desertretail.co.za:19001/Service.asmx?op=LiveAirtime',
           xmls,
           {headers:
             {'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log(res);
           }).catch(err=>{console.log(err)});


});





app.listen(1000, () => {
  console.log("Running");
});
