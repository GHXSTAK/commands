document.addEventListener("DOMContentLoaded", function() {
  // Fetching the data from the external file (commands.txt)
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
        const [cmd, perm, res, use] = row.split('\t');
        
        // Create a new table row
        const tr = document.createElement('tr');

        // Insert HTML for each column in the row
        tr.innerHTML = `
          <td class="com">
            <span class="cmdp">${cmd[0]}</span>${cmd.slice(1)}
          </td>
          <td class="per">${perm}</td>
          <td class="res">
            <div class="love_restxt" title="${use}">${res}</div>
          </td>
        `;
        
        // Append the row to the table body
        tbody.appendChild(tr);
      });
    })
    .catch(error => console.error('Error fetching commands.txt:', error));
});
