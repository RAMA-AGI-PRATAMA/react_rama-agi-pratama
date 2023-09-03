let counter = 1; 
let data = []; 

function tambahData() {
    const nama = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const freshness = document.querySelector('input[name="freshness"]:checked').value;
    const image = document.getElementById("image").value;
    const message = document.getElementById("message").value;
    const price = document.getElementById("productPrice").value;

    const newRow = document.getElementById("dataTable").getElementsByTagName('tbody')[0].insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    cell1.innerHTML = counter;
    cell2.innerHTML = nama;
    cell3.innerHTML = category;
    cell4.innerHTML = freshness;
    cell5.innerHTML = image;
    cell6.innerHTML = message;
    cell7.innerHTML = price;

    data.push({ counter, nama, category, freshness, image, message, price });
    counter++;

    document.getElementById("productForm").reset();
}

function deleteData() {
    if (data.length > 0) {
        const lastRow = document.getElementById("dataTable").getElementsByTagName('tbody')[0].rows[data.length - 1];
        lastRow.remove();
        data.pop();
        counter--;
    }
}

function searchData() {
    const searchUsername = prompt("Masukkan username yang ingin Anda cari:");

    if (searchUsername) {
        const foundData = data.find(item => item.nama === searchUsername);
        if (foundData) {
            const message = `Product name : ${foundData.nama}\nProduct Category : ${foundData.category}\nProduct Freshness : ${foundData.freshness}\nImage of Product : ${foundData.image}\nAdditional Description : ${foundData.message}\nProduct price : ${foundData.price}`;
            alert(message);
        } else {
            alert("Data tidak ditemukan.");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productNameInput = document.getElementById("productName");
    const productCategoryInput = document.getElementById("category");
    const imageInput = document.getElementById("image");
    const messageTextarea = document.getElementById("message");
    const productPriceInput = document.getElementById("productPrice");
    const productNameError = document.getElementById("productNameError");
    const productPriceError = document.getElementById("productPriceError");
    const submitBtn = document.getElementById("submitBtn");

    productNameInput.addEventListener("input", function () {
        validateProductName();
        checkFormValidity();
    });

    productPriceInput.addEventListener("input", function () {
        validateProductPrice();
        checkFormValidity();
    });

    function validateProductName() {
        const productName = productNameInput.value.trim();
        if (productName === "") {
            productNameError.textContent = "Product Name is required.";
            productNameInput.classList.add("error-border");
            return false;
        } else if (productName.length > 25) {
            productNameError.textContent = "Product Name must not exceed 25 characters.";
            productNameInput.classList.add("error-border");
            return false;
        } else {
            productNameError.textContent = "";
            productNameInput.classList.remove("error-border");
            return true;
        }
    }

    function validateProductPrice() {
        const productPrice = productPriceInput.value.trim();
        if (productPrice === "") {
            productPriceError.textContent = "Product Price is required.";
            productPriceInput.classList.add("error-border");
            return false;
        } else if (isNaN(productPrice)) {
            productPriceError.textContent = "Product Price should be a valid number.";
            productPriceInput.classList.add("error-border");
            return false;
        } else {
            productPriceError.textContent = "";
            productPriceInput.classList.remove("error-border");
            return true;
        }
    }

    function checkFormValidity() {
        const isValidName = validateProductName();
        const isValidPrice = validateProductPrice();
        submitBtn.disabled = !(isValidName && isValidPrice);
    }

    document.getElementById("submitBtn").addEventListener("click", function () {
        const productName = productNameInput.value.trim();
        const selectedCategory = productCategoryInput.value;
        const selectedFreshness = document.querySelector('input[name="freshness"]:checked');
        const selectedFile = imageInput.files[0];
        const message = messageTextarea.value.trim();
        const productPrice = productPriceInput.value.trim();
       
        // Validasi Product Name
        if (productName === 0) {
            alert("Please enter a valid Product Name.");
            return; 
        } else if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters.");
            return; 
        } else if (productName.length > 10) {
            alert("Product Name must not exceed 25 characters.");
            return; 
        } else if (/[@/#{}]/.test(productName)) {
            alert("Name must not contain symbols.");
            return; 
        } else if (productPrice === 0) {
            alert("Please enter a valid Product Price.");
            return; 
        } else if (message === 0) {
            alert("Please enter a message.");
            return;
        } else if (selectedCategory) {
            const freshnessValue = selectedFreshness.value;
            alert("Product Name : " + productName   + "\nProduct Category  : " + selectedCategory +  "\nProduct Freshness : " + freshnessValue + "\nImage of Product : " + selectedFile.name + "\nAdditional Description : " + message + "\nProduct Price : " + productPrice);
            return;
        } else {
            alert("Please select a category.");
        }  
    });
});
