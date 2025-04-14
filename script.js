document.addEventListener("DOMContentLoaded", function () {
  fetch("commands_list.txt")
    .then((res) => res.text())
    .then((text) => {
      const rows = text.trim().split("\n");
      const tbody = document.querySelector(".tablist tbody");

      rows.forEach((row) => {
        const [cmd, perm, res, example] = row.split("\t");

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

        // Hover logic
        cmdCell.addEventListener("mouseenter", () => {
          resCell.textContent = example;
        });
        cmdCell.addEventListener("mouseleave", () => {
          resCell.textContent = res;
        });

        tbody.appendChild(tr);
      });
    });
});
