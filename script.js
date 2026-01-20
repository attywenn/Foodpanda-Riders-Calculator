document.addEventListener('DOMContentLoaded', function() {
            const remittanceInput = document.getElementById('remittance');
            const paymentInput = document.getElementById('payment');
            const calculateBtn = document.getElementById('calculateBtn');
            const remitOutput = document.getElementById('remit');
            const earnOutput = document.getElementById('earn');
            const errorMessage = document.getElementById('errorMessage');

            calculateBtn.addEventListener('click', function() {
                // Reset error message
                errorMessage.style.display = 'none';
                
                const remittanceValue = parseFloat(remittanceInput.value);
                const paymentValue = parseFloat(paymentInput.value);

                if (isNaN(remittanceValue) || isNaN(paymentValue)) {
                    showError('Please enter valid numbers in both fields!');
                    return;
                }

                if (remittanceValue < 0 || paymentValue < 0) {
                    showError('Please enter positive values only!');
                    return;
                }

                const tax = paymentValue * 0.02;
                const finalSalary = paymentValue - tax;
                const totalRemittance = remittanceValue - finalSalary;

                if (totalRemittance < 0) {
                    remitOutput.textContent = 'No remittance needed! You have PHP ' + 
                        Math.abs(totalRemittance).toFixed(2) + ' credit from Foodpanda';
                    remitOutput.style.color = 'var(--success)';
                } else {
                    remitOutput.textContent = 'PHP ' + totalRemittance.toFixed(2);
                    remitOutput.style.color = 'var(--pandacolor)';
                }
                
                earnOutput.textContent = 'PHP ' + finalSalary.toFixed(2);
            });

            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
            }

            // Add input validation for real-time feedback
            [remittanceInput, paymentInput].forEach(input => {
                input.addEventListener('input', function() {
                    if (this.value && this.value < 0) {
                        this.value = Math.abs(this.value);
                    }
                });
            });
        });