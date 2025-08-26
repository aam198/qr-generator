const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  console.log(123);
}

// Event Listener - Form Submit
form.addEventListener('submit', onGenerateSubmit);