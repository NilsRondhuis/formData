const form = document.querySelector('.form');

form.onsubmit = handleSubmit;


function handleSubmit(e) {
    e.preventDefault();
    const 
        name = form.querySelector('[name="name"]'),
        age = form.querySelector('[name="age"]'),
        terms = form.querySelector('[name="license"]'),
        plan = form.querySelector('[name="plan"]');

    const data = {
        name: name.value,
        age: age.value,
        license: terms.checked,
        plan: plan.value, 
    };

    console.log(data);
}