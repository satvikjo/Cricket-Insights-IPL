document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-button").addEventListener("click", function (event) {
        event.preventDefault();

        var season = document.getElementById('seasons').value;
        var stat = document.getElementById('stats').value;

        var data = {
            season: season,
            stat: stat
        };

        console.log('Select a Season:', season);
        console.log('Select a Stat:', stat);
        
        fetch('/runQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicates we're sending JSON
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                console.log('Query results:', data);

                // Clear previous table contents
                var tableContainer = document.getElementById('table-container');
                tableContainer.innerHTML = '';

                // Create a new table element
                var table = document.createElement('table');
                var thead = table.createTHead();
                var tbody = table.createTBody();

                console.log(data)

                // Create table headers
                var headers = Object.keys(data[0]);
                var headerRow = thead.insertRow();
                headers.forEach(headerText => {
                    var th = document.createElement('th');
                    th.textContent = headerText;
                    headerRow.appendChild(th);
                });

                // Create table rows
                data.forEach(rowData => {
                    var row = tbody.insertRow();
                    headers.forEach(header => {
                        var cell = row.insertCell();
                        cell.textContent = rowData[header];
                    });
                });

                // Append the table to the table container
                tableContainer.appendChild(table);
                // Apply styles to the table
                tableContainer.classList.add('table-container'); // Add class for table container
                table.classList.add('styled-table'); // Add class for table

            })

            .catch((error) => {
                console.error('Error:', error);
                alert('Error executing query: ' + error.message);
            });
    });
});

