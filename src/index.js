window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item =>new bootstrap.Tooltip(item))
document.querySelectorAll('.add-to-card-btn').forEach(item =>{
    item.addEventListener("click", () =>{
        alert("أضيف المنتج إلى عربة الشراء")
    })
})

console.log("أهلًا بك في متجر عربي")
console.log("أهلًا بك في أكاديمية حسوب")