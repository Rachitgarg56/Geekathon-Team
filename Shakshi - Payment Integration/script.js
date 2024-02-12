function initiatePayment(amount) {

    var options = {
        key: "rzp_test_Cab6HcuRGQM7Xg",
        amount: amount * 100,
        currency: "INR",
        name: "SS Choice",
        description: "Purchase Cosmetic Product",
        image: "https://media.istockphoto.com/id/1325438924/vector/initial-ss-ss-letter-logo-design-vector-template.jpg?s=612x612&w=0&k=20&c=nyQCenAv4O6zHmv2lDiaD4Rc4In9y_OrrncosxxRBa0=",
        handler: function (response) {
            alert("PAYMENT SUCCESSFUL!  Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
            name: "Nupur",
            email: "nupur@gmail.com",
            contact: "9999999999"
        },
        notes: {
            address: "Ranchi"
        },
        theme: {
            color: "#45a049"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}