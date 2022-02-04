const { form } = document.forms;

form.onsubmit = handleSubmit;


function handleSubmit(e) {
    e.preventDefault();

    const { name, age, license, plan} = form;
    
    const data = {
        name: name.value,
        age: age.value,
        license: license.checked,
        plan: plan.value,
    }

    console.log(data);
}

