const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();

  // Get Form inputs
  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  // Validation
  if(url === '') {
    // TODO: Add custom alert
    alert('Please enter a URL');
  }
  else {
    showSpinner();
    //TODO:  temporarily adding timeout in hiding spinner after 1 sec until generate qr is complete
    setTimeout(() => {
      hideSpinner()
      // Run function and passes arguments from form
      generateQRCode(url, size);
    }, 1000);
  }
};

// Generate QR Code, taking in url and size from form
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

// Spinner 
const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
  document.getElementById('spinner').style.display='none';
}

hideSpinner();

// Event Listener - Form Submit
form.addEventListener('submit', onGenerateSubmit);