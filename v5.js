const { form } = document.forms;

form.onsubmit = handleSubmit;

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}