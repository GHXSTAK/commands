document.addEventListener("DOMContentLoaded", function () {
  // Fetching the data from the external file (commands_list.txt)
  fetch("commands_list.txt")
    .then((res) => res.text())
    .then((text) => {
      const rows = text.trim().split("\n");
      const tbody = document.querySelector(".tablist tbody");

      // Fill table with data
      rows.forEach((row) => {
        const [cmd, perm, res] = row.split("\t");

        const tr = document.createElement("tr");

        const cmdCell = document.createElement("td");
        cmdCell.classList.add("com");
        cmdCell.innerHTML = `<span class="cmdp">${cmd[0]}</span>${cmd.slice(1)}`;
        tr.appendChild(cmdCell);

        const permCell = document.createElement("td");
        permCell.classList.add("per");
        permCell.textContent = perm;
        tr.appendChild(permCell);

        const resCell = document.createElement("td");
        resCell.classList.add("res");
        resCell.textContent = res;
        tr.appendChild(resCell);

        tbody.appendChild(tr);
      });

      // === DROPDOWN FILTERING ===
      const button = document.getElementById("dropdownButton");
      const label = document.getElementById("dropdownLabel");
      const list = document.getElementById("dropdownList");

      const tableRows = document.querySelectorAll(".tablist tbody tr");

      button.addEventListener("click", () => {
        const isOpen = list.hidden === false;
        list.hidden = isOpen;
        button.setAttribute("aria-expanded", String(!isOpen));
      });

      list.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "li") {
          const role = e.target.getAttribute("data-role");
          label.textContent = role;
          list.hidden = true;
          button.setAttribute("aria-expanded", "false");

          tableRows.forEach((row) => {
            const roleCell = row.querySelector(".per");
            if (role === "Everyone") {
              row.style.display = "";
            } else {
              row.style.display =
                roleCell.textContent.trim() === role ? "" : "none";
            }
          });
        }
      });

      document.addEventListener("click", (e) => {
        if (!button.contains(e.target) && !list.contains(e.target)) {
          list.hidden = true;
          button.setAttribute("aria-expanded", "false");
        }
      });
    });
});
