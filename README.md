# get-sheet

Get all google spreadsheet datas with get-sheet

## Get All Rows

```

const doc = new GoogleSheet(cred);

doc.header(id, opt)
.then(res => {
  console.log(res)
})
```

## Get All Rowss

```

const doc = new GoogleSheet(cred);

doc.allRows(id, opt)
.then(res => {
  console.log(res)
})
```
