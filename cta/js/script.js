const donationButtons = document.querySelectorAll('.donation-button');
const donateButton = document.getElementById('donate-button');

donationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Remove active class from all buttons
    donationButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    e.target.classList.add('active');

    const selectedAmount = e.target.dataset.amount;
    const baseUrl = 'https://secure.actblue.com/donate/web-bfp-march2-2024?refcode=web_test&amount=';
    const donateUrl = baseUrl + selectedAmount;
    donateButton.href = donateUrl;
    donateButton.textContent = `Donate $${selectedAmount}`;
  });
});
