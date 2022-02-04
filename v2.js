const form = document.querySelector('.form');

form.onsubmit = handleSubmit;

function isCheckboxOrRadio(type) {
    return ['checkbox', 'radio'].includes(type);
}

function handleSubmit(e) {
    e.preventDefault();

    const fields = document.querySelectorAll('input, select');
    const data = {};

    fields.forEach(field => {
        const { name, value, type, checked } = field;

        data[name] = isCheckboxOrRadio(type) ? checked : value;
    });

    console.log(data);
}