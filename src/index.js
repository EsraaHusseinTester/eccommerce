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


document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active');
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active');
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

//تحديث السعر الإجمالي للمنتج

document.querySelectorAll('[data-product-quantity]').forEach (item =>{
    item.addEventListener('change',() => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$"

        calculateTotalPrice();

    })
})
document.querySelectorAll('[data-remove-from-card]').forEach (item =>{
    item.addEventListener('click', () =>{
        item.closest('[data-product-info]').remove()
        calculateTotalPrice();
    })
})

function calculateTotalPrice (){
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach (product =>{
        const pricePerUnit = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value
        const totalPriceForProduct = pricePerUnit * quantity

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + "$"

}

const citiesByCountry = {
    sa: ['الرياض','جدة'],
    eg: ['الاسكندرية','القاهرة'],
    jo: ['عمان','الزرقاء'],
    sy: ['دمشق','حلب', 'حماه']
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value

        const cities = citiesByCountry[country]

        document.querySelectorAll('#paymentcities option').forEach( option => option.remove () )

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر المدينة')
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value','')
        firstOption.setAttribute('disabled', 'true')
        firstOption.setAttribute('selected', 'true')

        const citi_options = document.getElementById('paymentcities')
        citi_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value',city)
            citi_options.appendChild(newOption)
        })
    })
})


document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item=>{
    item.addEventListener("change", () =>{
        const paymentMethod = item.value

        const cteditCardInputs = document.querySelectorAll('#credit_card_info input');

        if(paymentMethod === 'on_delivery'){
            cteditCardInputs.forEach(input =>{
                input.style.display = 'none'
            })
        }else{
            cteditCardInputs.forEach(input =>{
                input.style.display = 'block'
            })  
        }
    })
})


document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة"  + new Date().getFullYear();





console.log("أهلًا بك في متجر عربي")
console.log("أهلًا بك في أكاديمية حسوب")