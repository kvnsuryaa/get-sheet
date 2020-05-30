# get-sheet

Get all google spreadsheet datas with get-sheet

## Installation

```
npm install get-sheet
```

## Get All Header

```
const GoogleSheet = require('get-sheet')
const cred = require('./client_secret.json')

const doc = new GoogleSheet(cred);

let id = '<SPREAD_SHEET_ID>'

let opt = {
  sheet: 'sheet1',
}

doc.header(id, opt)
.then(res => {
  console.log(res)
})
```

## Get All Rows

```
const GoogleSheet = require('get-sheet')
const cred = require('./client_secret.json')

const doc = new GoogleSheet(cred);

let id = '<SPREAD_SHEET_ID>'

let opt = {
  sheet: 'sheet1',
}

doc.allRows(id, opt)
.then(res => {
  console.log(res)
})
```

Thank you for using :))
