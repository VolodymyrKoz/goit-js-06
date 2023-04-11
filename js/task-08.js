  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
      alert('All fields must be filled!');
      return;
    }

    const formData = {
      email,
      password
    };

    console.log(formData);
    form.reset();
  });
