const { google } = require("googleapis");

const cred = require("./client_secret.json");

const GoogleSheet = function (cred) {
  const AUTH = new google.auth.JWT(cred.client_email, null, cred.private_key, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]);

  const gsapi = google.sheets({ version: "v4", auth: AUTH });

  function listAPI() {
    const header = async (conf) => {
      let header = await gsapi.spreadsheets.values.get(conf);

      let col_sheet = [];
      let sheet_obj = header.data.values[0];
      let len = sheet_obj.length;
      for (var i = 0; i < len; i++) {
        col_sheet[i] = (i + 1 + 9).toString(36).toUpperCase();
      }

      conf.range = `${conf.range.substring(0, conf.range.lastIndexOf("!"))}!${col_sheet[0]}2:${col_sheet.pop()}`;

      let obj = {
        abc: col_sheet,
        item: header.data.values[0],
        range: conf.range,
      };
      return obj;
    };

    const rows = async (conf, header) => {
      let rows = await gsapi.spreadsheets.values.get(conf);
      let data = rows.data.values;
      let len = rows.data.values.length;

      let beauty_row = [];

      data.forEach((element, i) => {
        var obj = {};
        for (s in header) {
          obj[header[s]] = element[s];
        }
        beauty_row.push(obj);
      });
      let obj = {
        'rows': beauty_row,
        'len': len
      }
      return obj;
    };

    return {
      header,
      rows,
    };
  }

  this.header = function (spreadID, conf) {
    try {

      const { sheet } = opt

      const conf = {
        spreadsheetId: spreadID,
        range: `${sheet}!A1:ZZ1`,
        majorDimension: "ROWS",
      };
      let header = listAPI().header(conf);
      return header;
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  this.allRows = async function (spreadID, opt) {
    try {

      const { sheet } = opt

      const conf = {
        spreadsheetId: spreadID,
        range: `${sheet}!A1:ZZ1`,
        majorDimension: "ROWS",
      };

      let header = await listAPI().header(conf);

      conf.range = header.range;
      let rows = await listAPI().rows(conf, header.item);
      return rows;

    } catch (err) {
      console.log("ERROR", err);
    }
  };
};

module.exports = GoogleSheet;
