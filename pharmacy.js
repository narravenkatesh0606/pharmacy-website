function register(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
        return;
    }
    localStorage.setItem(type + "Email", email);
    localStorage.setItem(type + "Password", password);
    alert('Registration successful! Now can you login in');
    box.querySelector('input[type="email"]').value = "";
box.querySelector('input[type="password"]').value = "";
    bootstrap.Modal.getInstance(box).hide();
}
function login(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
    return;
    }
    if(email === localStorage.getItem(type + "Email") && password === localStorage.getItem(type + "Password")){
        alert('login successful!');
        bootstrap.Modal.getInstance(box).hide();
    }else {
        alert('Invalid email or password');
    }
}


function addMedicine(){
    let box = document.querySelector('#medicine');

    let medicineName = box.querySelector('input[type="text"]').value;
    let medicineType = box.querySelector('select').value;
    let price = box.querySelectorAll('input[type="tel"]')[0].value;
    let stock = box.querySelectorAll('input[type="tel"]')[1].value;
    let expiryDate = box.querySelector('input[type="date"]').value;
    let description = box.querySelector('textarea').value;

    if(medicineName === "" || medicineType === "" || price === "" || stock === "" || expiryDate === "" || description === ""){
        alert("Please enter all details");
        return;
    }

    localStorage.setItem("medicineName", medicineName);
    localStorage.setItem("medicineType", medicineType);
    localStorage.setItem("medicinePrice", price);
    localStorage.setItem("medicineStock", stock);
    localStorage.setItem("medicineExpiry", expiryDate);
    localStorage.setItem("medicineDescription", description);

    alert("Medicine added successfully!");

    box.querySelector('input[type="text"]').value = "";
    box.querySelector('select').value = "Enter medicine category";
    box.querySelectorAll('input[type="tel"]')[0].value = "";
    box.querySelectorAll('input[type="tel"]')[1].value = "";
    box.querySelector('input[type="date"]').value = "";
    box.querySelector('textarea').value = "";

    bootstrap.Modal.getInstance(box).hide();
}


function addCategory(){
    let box = document.querySelector('#categories');

    let categoryName = box.querySelector('select').value;
    let medicineType = box.querySelectorAll('input[type="text"]')[0].value;
    let displayOrder = box.querySelectorAll('input[type="text"]')[1].value;
    let description = box.querySelector('textarea').value;

    if(categoryName === "" || medicineType === "" || displayOrder === "" || description === ""){
        alert("Please enter all details");
        return;
    }

    localStorage.setItem("categoryName", categoryName);
    localStorage.setItem("categoryMedicineType", medicineType);
    localStorage.setItem("displayOrder", displayOrder);
    localStorage.setItem("categoryDescription", description);

    alert("Category added successfully!");

    box.querySelector('select').value = "Enter medicine category";
    box.querySelectorAll('input[type="text"]')[0].value = "";
    box.querySelectorAll('input[type="text"]')[1].value = "";
    box.querySelector('textarea').value = "";

    bootstrap.Modal.getInstance(box).hide();
}

function searchMedicine(){
    let box = document.querySelector('#search');

    let medicineName = box.querySelector('input[type="text"]').value;
    let category = box.querySelectorAll('select')[0].value;
    let medicineType = box.querySelectorAll('select')[1].value;
    let manufacturer = box.querySelectorAll('select')[2].value;
    let availability = box.querySelectorAll('select')[3].value;

    if(medicineName === "" || category === "" || medicineType === "" || manufacturer === "" || availability === ""){
        alert("Please enter all details");
        return;
    }

    localStorage.setItem("searchMedicineName", medicineName);
    localStorage.setItem("searchCategory", category);
    localStorage.setItem("searchMedicineType", medicineType);
    localStorage.setItem("searchManufacturer", manufacturer);
    localStorage.setItem("searchAvailability", availability);

    alert("Medicine search completed!");

    box.querySelector('input[type="text"]').value = "";
    box.querySelectorAll('select')[0].value = "Select category";
    box.querySelectorAll('select')[1].value = "Select medicine type";
    box.querySelectorAll('select')[2].value = "Select manufacturer";
    box.querySelectorAll('select')[3].value = "Select availability";

    bootstrap.Modal.getInstance(box).hide();
}


function addToCart(){
    let box = document.querySelector('#cart');

    let medicineName = box.querySelectorAll('select')[0].value;
    let quantity = box.querySelector('input[type="number"]').value;
    let price = box.querySelectorAll('input[type="number"]')[1].value;
    let customerName = box.querySelector('input[type="text"]').value;
    let paymentMethod = box.querySelectorAll('select')[1].value;
    let orderStatus = box.querySelectorAll('select')[2].value;

    if(medicineName === "" || quantity === "" || price === "" || customerName === "" || paymentMethod === "" || orderStatus === ""){
        alert("Please enter all details");
        return;
    }

    localStorage.setItem("cartMedicine", medicineName);
    localStorage.setItem("cartQuantity", quantity);
    localStorage.setItem("cartPrice", price);
    localStorage.setItem("cartCustomer", customerName);
    localStorage.setItem("cartPayment", paymentMethod);
    localStorage.setItem("cartStatus", orderStatus);

    alert("Medicine added to cart successfully!");

    box.querySelectorAll('select')[0].value = "Select medicine";
    box.querySelectorAll('input[type="number"]')[0].value = "";
    box.querySelectorAll('input[type="number"]')[1].value = "";
    box.querySelector('input[type="text"]').value = "";
    box.querySelectorAll('select')[1].value = "Select payment method";
    box.querySelectorAll('select')[2].value = "Select order status";

    bootstrap.Modal.getInstance(box).hide();
}


function placeOrder(){
    let box = document.querySelector('#orders');

    let orderId = box.querySelectorAll('input[type="text"]')[0].value;
    let customerName = box.querySelectorAll('input[type="text"]')[1].value;
    let medicineName = box.querySelectorAll('input[type="text"]')[2].value;
    let quantity = box.querySelector('input[type="number"]').value;
    let paymentMethod = box.querySelector('select').value;
    let orderStatus = box.querySelectorAll('select')[1].value;
    let deliveryDate = box.querySelector('input[type="date"]').value;

    if(orderId === "" || customerName === "" || medicineName === "" || quantity === "" || paymentMethod === "" || orderStatus === "" || deliveryDate === ""){
        alert("Please enter all details");
        return;
    }

    localStorage.setItem("orderId", orderId);
    localStorage.setItem("orderCustomer", customerName);
    localStorage.setItem("orderMedicine", medicineName);
    localStorage.setItem("orderQuantity", quantity);
    localStorage.setItem("orderPayment", paymentMethod);
    localStorage.setItem("orderStatus", orderStatus);
    localStorage.setItem("deliveryDate", deliveryDate);

    alert("Order placed successfully!");

    box.querySelectorAll('input[type="text"]')[0].value = "";
    box.querySelectorAll('input[type="text"]')[1].value = "";
    box.querySelectorAll('input[type="text"]')[2].value = "";
    box.querySelector('input[type="number"]').value = "";
    box.querySelector('select').value = "Select payment method";
    box.querySelectorAll('select')[1].value = "Select order status";
    box.querySelector('input[type="date"]').value = "";

    bootstrap.Modal.getInstance(box).hide();
}
