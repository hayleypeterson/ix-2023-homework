
class UI {
    constructor() {
      this.form = document.getElementById('form');
      this.addButton = document.getElementById('addButton');
      this.taskInput = document.getElementById('taskInput');
      this.tableBody = document.getElementById('table-body');
      this.tasks = [];
      this.addButton.addEventListener('click', (e) => this.addTask(e));
      this.renderTable();
    }

    addTask(e) {
        console.log("pushed button");
        const task = taskInput.value;
        e.preventDefault();
        this.tasks.push(task);
        console.log(this.tasks);
        this.renderTable();
        this.taskInput.value = '';
    }
    addTaskS() {
        this.addTask(this.taskInput);
    }

    renderTable() {
        this.tableBody.innerHTML = '';
    
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
    
          const tr = this.createTableRow(task);
          this.tableBody.appendChild(tr);
        }
      }
    
    createTableRow(task) {
        const tr = document.createElement('tr');
        const tdTask = document.createElement('td');
        const tdComplete = document.createElement('td');
        const tdActions = document.createElement('td');
        tdTask.innerHTML = task;
        const checkbox = document.createElement('input');
        checkbox.classList.add('p-5');
        checkbox.type = 'checkbox';
        tdComplete.appendChild(checkbox);
        const deletebtn = document.createElement("button");
        deletebtn.setAttribute('type', 'button');
        deletebtn.classList.add('btn', 'btn-danger');
        deletebtn.innerHTML = "🗑";
        deletebtn.addEventListener('click', () =>
        this.onRemoveBookClicked(task)
        );
        //var icon = document.createElement('i');
        //icon.classList.add('bi', 'bi-trash');
        //deletebtn.appendChild(icon);

        tdActions.appendChild(deletebtn);

        //const actionButtons = this.createActionButtons(book);
        //tdActions.appendChild(actionButtons[0]);
        //tdActions.appendChild(actionButtons[1]);
    
        tr.appendChild(tdTask);
        tr.appendChild(tdComplete);
        tr.appendChild(tdActions);
    
        return tr;
    }
    
    
    onRemoveBookClicked(task) {
        this.tasks = this.tasks.filter((x) => {
          return task !== x;
        });
        this.renderTable();
    }


}

const ui = new UI();