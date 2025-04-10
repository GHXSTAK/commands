document.addEventListener("DOMContentLoaded", function() {
  // Fetching the data from the external file (commands_list.txt)
  fetch('commands_list.txt')
    .then(res => res.text())
    .then(text => {
      // Split the text from the file by line
      const rows = text.trim().split('\n');
      // Get the table body element
      const tbody = document.querySelector('.tablist tbody');

      // Loop through each row of the file
      rows.forEach(row => {
        // Split the row data by tab
        const [cmd, perm, res] = row.split('\t');
        
        // Create a new table row
        const tr = document.createElement('tr');

        // Create and append each column in the row
        const cmdCell = document.createElement('td');
        cmdCell.classList.add('com');
        cmdCell.innerHTML = `<span class="cmdp">${cmd[0]}</span>${cmd.slice(1)}`;
        tr.appendChild(cmdCell);

        const permCell = document.createElement('td');
        permCell.classList.add('per');
        permCell.textContent = perm;
        tr.appendChild(permCell);

        const resCell = document.createElement('td');
        resCell.classList.add('res');
        resCell.textContent = res;;
        tr.appendChild(resCell);
        
        // Append the row to the table body
        tbody.appendChild(tr);
      });
    });
});
