const form = document.getElementById('loginForm');
form.addEventListener('submit', async (e)=> {
  e.preventDefault();
  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    userCNIC: document.getElementById('userCNIC').value,
    time: new Date().toISOString()
  };

  await fetch('/collect', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });

  document.getElementById('warning').classList.remove('hidden');
  form.innerHTML = `<h3>Thanks for Sign In</h3>
  <p>This is a Social Engineering Project - By CC Cyber Security Wing.</p>`;
});
