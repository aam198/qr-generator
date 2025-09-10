const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();
  // Clear UI if a QR code is already there
  clearUI();

  // Get Form inputs
  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;
  const colorDark = document.getElementById('color-dark').value;
  const colorLight = document.getElementById('color-light').value;


  // Validation
  if(url === '') {
    // TODO: Add custom alert
    alert('Please enter a URL');
  }
  else {
    showSpinner();

    setTimeout(() => {
      hideSpinner()
      // Run function and passes arguments from form
      generateQRCode(url, size,colorDark, colorLight);
      // Additional setTimeout since img is not available right away
      setTimeout(()=> {
        // Grabs the img.src from the image/qrcode on the page
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl);
      }, 50)
    }, 1000);
  }
};

// Generate QR Code, taking in url and size from form
const generateQRCode = (url, size, colorDark, colorLight) => {
  // need qrcode for save button below
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
    colorDark: colorDark,
    colorLight: colorLight,
  });
};

// Spinner 
const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
  document.getElementById('spinner').style.display='none';
}

// Clear the QR if submitting again
const clearUI = () => {
  qr.innerHTML= '';
  const saveLink = document.getElementById('save-link');
  if (saveLink){
    saveLink.remove();
  }
}

// Save button and download 
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.href=saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
}

hideSpinner();

// Event Listener - Form Submit
form.addEventListener('submit', onGenerateSubmit);