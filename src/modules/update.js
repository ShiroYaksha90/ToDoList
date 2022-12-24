import resetIndex from "./rest.js";

const clearCompletedTask = () => {
    let tasksArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasksArr = tasksArr.filter((task) => {
        if (task.status !== true) {
            return true;
        }
        return false;
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    resetIndex();
    window.location.reload();
};
export default clearCompletedTask;