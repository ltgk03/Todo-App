
function createTask(taskNumber) {
    const newTask = document.querySelector('#newTask').value;
    if (newTask) {
        const id = taskNumber + 1;
        $.ajax({
            url: '/',
            type: 'PUT',
            data: { id, task: newTask, status: false },
            success: function (data) {
                console.log(data);
                location.reload();
            }
        })();
    }
}

function doneTask(id) {
    console.log('here');
    $.ajax({
        url: '/' + id,
        type: 'DELETE',
        success: function (data) {
            console.log(data);
            location.reload();
        }
    })();
}

document.onclick = function () {
    $('label > input').each(function () {
        if (this.checked) {
            doneTask(this.id);
        }
    })
}