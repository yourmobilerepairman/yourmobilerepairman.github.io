const sortByDate = (datePropName, ascending = true) => (a, b) => {
    const aDate = new Date(a[datePropName]);
    const bDate = new Date(b[datePropName]);

    if (ascending) {
        return aDate - bDate;
    }

    return bDate - aDate;
}

const formatMultiLinesForHtml = text => text.replace(/\n/g, '<br />');

const formatDate = (date, format) => format
    .replace('YYYY', date.getFullYear())
    .replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
    .replace('DD', date.getDate().toString().padStart(2, '0'));

const cleanseCsvField = value => value.replace(/\n/g, '\\n');

const downloadCsv = (data, fileName) => {
    let csvContent = '';
    data.forEach(row => {
        csvContent += row.map(c => `"${cleanseCsvField(c.toString())}"`).join(',') + '\n';
    });

    // Download the generated CSV content
    const encodedData = encodeURIComponent(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", `data:text/csv;charset=utf-8,${encodedData}`);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}