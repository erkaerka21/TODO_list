const addTaskBttn = document.getElementById("addTaskBttn");

const tasks = [
  {
    name: "Task One",
    status: "TODO",
  },
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];
let newTask = {};
let newTask1 = `<div>
                <li class="list-group-item d-flex">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="listGroupRadio"
                    value=""
                    id="firstRadio"
                  />

                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="firstRadio"
                    >[loan-management] - Add cart component
                    <div>
                      <i class="fa-solid fa-pen-to-square"></i
                      ><i class="fa-solid fa-trash"></i></div
                  ></label>
                </li>
              </div>`;
addTaskBttn.addEventListener("click", () => {});
