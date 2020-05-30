# get-sheet

Get all google spreadsheet datas with get-sheet

## Installation

```
npm install get-sheet
```

## Get All Rows

```
const GoogleSheet = require('get-sheet')

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

## Get All Rowss

```
const GoogleSheet = require('get-sheet')

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
