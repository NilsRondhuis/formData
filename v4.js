const { form } = document.forms;

form.onsubmit = handleSubmit;

function isCheckboxOrRadio(type) {
    return ['checkbox', 'radio'].includes(type);
}

function handleSubmit(e) {
    e.preventDefault();

    const {elements} = form;
    const data = {};
    
    [...elements].forEach(element => {
        
        const {name} = element;

        if (name) {
            const { value, type, checked } = element;
            data[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    });

    console.log(data);
}
