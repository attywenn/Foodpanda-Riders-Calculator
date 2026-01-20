// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const remittanceInput = document.getElementById('remittance');
    const paymentInput = document.getElementById('payment');
    const calculateBtn = document.querySelector('.calculate');
    const remitOutput = document.getElementById('remit');
    const earnOutput = document.getElementById('earn');

    // Handle click on Calculate
    calculateBtn.addEventListener('click', function() {
        const remittanceValue = parseFloat(remittanceInput.value);
        const paymentValue = parseFloat(paymentInput.value);

        if (isNaN(remittanceValue) || isNaN(paymentValue)) {
            alert('Please enter numbers only!');
            return;
        }

        const tax = paymentValue * 0.02;
        const finalSalary = paymentValue - tax;
        const totalRemittance = remittanceValue - finalSalary;
        

        if (totalRemittance < 0) {
            remitOutput.textContent = 'Hindi mo na kailangang mag-remit, paps! May utang pang PHP '
            + Math.abs(totalRemittance.toFixed(2))
            + ' si Foodpanda sayo na maaaring makuha sa susunod mong COD!';
        } else {

            remitOutput.textContent = 'PHP '+totalRemittance.toFixed(2);
        }
        earnOutput.textContent = 'PHP '+finalSalary.toFixed(2);
    });
});