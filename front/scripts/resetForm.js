function resetForm () {
const inputs = document.querySelectorAll('.seccion-form input')
    inputs.forEach(function (input) {
        input.value = '';
    })
};

module.exports= resetForm;