function SubmitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    alert(`Name: ${name} Email: ${email} Message: ${message}`);
}