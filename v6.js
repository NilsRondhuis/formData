const { form } = document.forms;

form.onsubmit = handleSubmit;

function isCheckboxOrRadio(type) {
    return ['checkbox', 'radio'].includes(type);
}

function handleSubmit(e) {
    e.preventDefault();

    for (let field of form) {

        const {name} = field;

        if (name) {
            const {type, checked, value} = field;

            data[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }

    console.log(data);
}