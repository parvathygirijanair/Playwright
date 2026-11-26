const exceljs=require('exceljs');
async function readExcel(){
const workBook=new exceljs.Workbook();
await workBook.xlsx.readFile("C:/Users/ashgo/Downloads/Obsqura Testing.xlsx");
const workSheet = workBook.getWorksheet('Sheet1');
workSheet.eachRow((row,rowNumber)=>{
    console.log(` rownumber ${rowNumber}`,row.values);
  
})
}
  readExcel();