document.addEventListener("DOMContentLoaded", function () {
    // Get all tables
    const tables = document.querySelectorAll("table");

    // Find the table with the maximum width
    let maxWidth = 0;
    tables.forEach((table) => {
        const tableWidth = table.offsetWidth;
        if (tableWidth > maxWidth) {
            maxWidth = tableWidth;
        }
    });

    // Set the width of all tables to the maximum width
    tables.forEach((table) => {
        table.style.width = maxWidth + "px";
    });
});