function SignControl(User) {
  const { name, email, phone, password, status } = User;

  if (name === "" || email === "" || phone === "" || password === "") {
    alert("Please fill all the fields");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  if (phone.length < 10) {
    alert("Phone number must be at least 10 characters");
    return false;
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

export { SignControl };
