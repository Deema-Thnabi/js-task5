const registerForm = document.querySelector(".registerForm");
const taskList = document.querySelector(".taskList");

registerForm.onsubmit = function(e) {
  e.preventDefault();
  const task = e.target.elements["task"].value;

  const result = `
        <li>
            <input type="checkbox" class="checkbox"/>
            <label>${task}</label>
        </li>
    `;
  taskList.innerHTML += result;

  // Get all checkboxes and add event listener to each
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach(function (checkbox) {
    checkbox.onclick = function () {
      checkbox.nextElementSibling.classList.toggle("done");
    };
  });
};