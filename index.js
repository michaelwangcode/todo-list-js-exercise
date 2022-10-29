// Create new task
let newTask = function(title, description) {

  // Create a task object
  const task = {
    title: title,
    description: description,
    complete: false,

    // Prints out the provided task's details
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Marks the provided task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
};




// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();       // Clean Cat Litter has not been completed
task1.markCompleted();  // Mark task as completed
console.log("Marked task as completed");
task1.logState();       // Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);

