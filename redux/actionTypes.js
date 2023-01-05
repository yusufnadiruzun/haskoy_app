const signin = "SIGNIN";

export function SigninAction(result) {
  return {
    type: signin,
    result: result,
  };
}