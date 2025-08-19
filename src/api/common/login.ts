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
    // 设置为false的时候不会携带token
    token: false,
    // 开发模式下使用自定义的接口
    customDev: true,
    // 是否开启全局请求loading
    loading: true,
  });
}

export function logoutApi() {
  return useGet("/logout");
}
