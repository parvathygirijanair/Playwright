const path = require('node:path');
const ExcelJS = require('exceljs');

const workbookPath = path.join(__dirname, '..', 'test-data', 'testData.xlsx');

async function readExcel(sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(workbookPath);
    const worksheet = workbook.getWorksheet(sheetName);

    if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found in ${workbookPath}`);
    }

    const headers = worksheet
        .getRow(1)
        .values.slice(1)
        .map((value) => (value === undefined ? '' : String(value).trim()));
    const rows = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
            return;
        }

        const data = {};
        headers.forEach((header, index) => {
            if (header) {
                data[header] = row.getCell(index + 1).text;
            }
        });

        if (Object.values(data).some((value) => value !== '')) {
            rows.push(data);
        }
    });

    return rows;
}

module.exports = { readExcel };
