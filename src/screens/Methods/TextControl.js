function SignTextControl(User) {
    setTimeout(() => {}, 300);
    const { name, email, phone, password, status } = User;
  
    if (name === "" || email === "" || phone === "" || password === "") {
      alert("Lütfen Boş Alan Bırakmayınız");
      return false;
    }
    if (password.length < 6) {
      alert("Şifre 6 Haneli Olmalıdır");
      return false;
    }
    if (phone.length < 10) {
      alert("Telefon Numarası 10 Haneli Olmalıdır");
      return false;
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("Lütfen Geçerli Bir Mail Adresi Giriniz");
      return false;
    }
  
    return true;
  }
  
  function LoginTextControl(phone,password) {
    
  
    if (phone === "" || password === "") {
      alert("Lütfen Boş Alan Bırakmayınız");
      return false;
    }
    if (password.length < 6) {
      alert("Şifre 6 Haneli Olmalıdır");
      return false;
    }
    if (phone.length < 10) {
      alert("Telefon Numarası 10 Haneli Olmalıdır");
      return false;
    }
  
    return true;
  }

  export { SignTextControl, LoginTextControl };
  