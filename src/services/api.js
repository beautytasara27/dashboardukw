const Authenticate = async ({ Username, Password, Nonce }) => {
  const requestBody = {
    Username: Username,
    Password: Password,
    Nonce: Nonce
  };
  console.log("body", JSON.stringify(requestBody));
  try {
    const response = await fetch("https://authentication.somee.com/api/v1/Users/Auth", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.log("caught", error);
  }
};

const AuthService = {
  Authenticate,
};
export default AuthService;
