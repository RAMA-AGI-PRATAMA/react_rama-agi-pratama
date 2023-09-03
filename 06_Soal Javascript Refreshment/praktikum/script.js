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
        if (productName === "") {
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
        } else if (productPrice === "") {
            alert("Please enter a valid Product Price.");
            return; 
        } else if (message === "") {
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
