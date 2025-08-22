export type LoginParams = {
  username: string;
  password: string;
  type?: "account";
};

export type LoginMobileParams = {
  mobile: string;
  code: string;
  type: "mobile";
};

export type LoginResultModel = {
  token: string;
};

export function loginApi(params: LoginParams | LoginMobileParams) {
  return usePost<LoginResultModel, LoginParams | LoginMobileParams>("/login", params, {
    // Set asfalseWill not be carried whentoken
    token: false,
    // Use custom interface in development mode
    customDev: true,
    // Enable global requestloading
    loading: true,
  });
}

export function logoutApi() {
  return useGet("/logout");
}
