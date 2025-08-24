<script setup lang="ts">
import GlobalLayoutFooter from "~/layouts/components/global-footer/index.vue";
import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons-vue";
import { delayTimer } from "@/utils/helper";
import { AxiosError } from "axios";
import { loginApi } from "~/api/common/login";
import { getQueryParam } from "~/utils/tools";
import type { LoginMobileParams, LoginParams } from "~@/api/common/login";
import pageBubble from "@/utils/page-bubble";

const appStore = useAppStore();
const { layoutSetting } = storeToRefs(appStore);

const message = useMessage();
const notification = useNotification();
const router = useRouter();
const token = useAuthorization();
const loginModel = reactive({
  username: undefined,
  password: undefined,
  mobile: undefined,
  code: undefined,
  type: "account",
  remember: true,
});
const { t } = useI18nLocale();
const formRef = shallowRef();
const codeLoading = shallowRef(false);
const resetCounter = 60;
const submitLoading = shallowRef(false);
const errorAlert = shallowRef(false);
const bubbleCanvas = ref<HTMLCanvasElement>();
const { counter, pause, reset, resume, isActive } = useInterval(1000, {
  controls: true,
  immediate: false,
  callback(count) {
    if (count) {
      if (count === resetCounter)
        pause();
    }
  },
});
async function getCode() {
  codeLoading.value = true;
  try {
    await formRef.value.validate(["mobile"]);
    setTimeout(() => {
      reset();
      resume();
      codeLoading.value = false;
      message.success("The verification code is：123456");
    }, 3000);
  }
  catch (error) {
    codeLoading.value = false;
  }
}

async function submit() {
  submitLoading.value = true;
  try {
    await formRef.value?.validate();
    let params: LoginParams | LoginMobileParams;

    if (loginModel.type === "account") {
      params = {
        username: loginModel.username,
        password: loginModel.password,
      } as unknown as LoginParams;
    }
    else {
      params = {
        mobile: loginModel.mobile,
        code: loginModel.code,
        type: "mobile",
      } as unknown as LoginMobileParams;
    }
    const { data } = await loginApi(params);
    token.value = data?.token;
    notification.success({
      message: "Login successful",
      description: "Welcome back！",
      duration: 3,
    });
    // Get whether there is a redirect link，If it exists, use the redirect address
    const redirect = getQueryParam("redirect", "/");
    router.push({
      path: redirect,
      replace: true,
    });
  }
  catch (e) {
    if (e instanceof AxiosError)
      errorAlert.value = true;

    submitLoading.value = false;
  }
}
onMounted(async () => {
  await delayTimer(300);
  pageBubble.init(unref(bubbleCanvas)!);
});

onBeforeUnmount(() => {
  pageBubble.removeListeners();
});
</script>

<template>
  <div class="h-screen flex-center">
    <div class="fixed left-12 top-8 flex items-center space-x-4xl">
      <img size-4 object-cover src="/logo.svg">
      <div class="logo-text text-[#006DEE] font-medium">
        Lite Template
      </div>
    </div>
    <div class="fixed right-12 top-8 z-11 flex-center">
      <span
        class="flex-center cursor-pointer text-16px"
        @click="appStore.toggleTheme(layoutSetting.theme === 'dark' ? 'light' : 'dark')"
      >
        <!-- Light and dark mode toggle button -->
        <template v-if="layoutSetting.theme === 'light'">
          <carbon-moon />
        </template>
        <template v-else>
          <carbon-sun />
        </template>
      </span>
      <SelectLang />
    </div>
    <div class="h-[300px] w-[400px]">
      <a-form ref="formRef" :model="loginModel">
        <a-tabs v-model:active-key="loginModel.type" centered>
          <a-tab-pane key="account" :tab="t('pages.login.accountLogin.tab')" />
          <a-tab-pane key="mobile" :tab="t('pages.login.phoneLogin.tab')" />
        </a-tabs>
        <!-- Check if it existserror -->
        <a-alert
          v-if="errorAlert && loginModel.type === 'account'"
          :message="t('pages.login.accountLogin.errorMessage')" type="error" show-icon mb-24px
        />
        <a-alert
          v-if="errorAlert && loginModel.type === 'mobile'"
          :message="t('pages.login.phoneLogin.errorMessage')" type="error" show-icon mb-24px
        />
        <template v-if="loginModel.type === 'account'">
          <a-form-item name="username" :rules="[{ required: true, message: t('pages.login.username.required') }]">
            <a-input
              v-model:value="loginModel.username" allow-clear
              autocomplete="off"
              :placeholder="t('pages.login.username.placeholder')" size="large" @press-enter="submit"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password" :rules="[{ required: true, message: t('pages.login.password.required') }]">
            <a-input-password
              v-model:value="loginModel.password" allow-clear
              :placeholder="t('pages.login.password.placeholder')" size="large" @press-enter="submit"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>
        </template>
        <template v-if="loginModel.type === 'mobile'">
          <a-form-item
            name="mobile" :rules="[
              { required: true, message: t('pages.login.phoneNumber.required') },
              {
                pattern: /^(86)?1([38][0-9]|4[579]|5[0-35-9]|6[6]|7[0135678]|9[89])[0-9]{8}$/,
                message: t('pages.login.phoneNumber.invalid'),
              },
            ]"
          >
            <a-input
              v-model:value="loginModel.mobile" allow-clear
              :placeholder="t('pages.login.phoneNumber.placeholder')" size="large" @press-enter="submit"
            >
              <template #prefix>
                <MobileOutlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="code" :rules="[{ required: true, message: t('pages.login.captcha.required') }]">
            <div flex items-center>
              <a-input
                v-model:value="loginModel.code"
                style="flex: 1 1 0%; transition: width 0.3s ease 0s; margin-right: 8px;" allow-clear
                :placeholder="t('pages.login.captcha.placeholder')" size="large" @press-enter="submit"
              >
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input>
              <a-button :loading="codeLoading" :disabled="isActive" size="large" @click="getCode">
                <template v-if="!isActive">
                  {{ t('pages.login.phoneLogin.getVerificationCode') }}
                </template>
                <template v-else>
                  {{ resetCounter - counter }} {{ t('pages.getCaptchaSecondText') }}
                </template>
              </a-button>
            </div>
          </a-form-item>
        </template>
        <div class="flex-between mb-24px">
          <a-checkbox v-model:checked="loginModel.remember">
            {{ t('pages.login.rememberMe') }}
          </a-checkbox>
          <a>{{ t('pages.login.forgotPassword') }}</a>
        </div>
        <a-button type="primary" block :loading="submitLoading" size="large" @click="submit">
          {{ t('pages.login.submit') }}
        </a-button>
      </a-form>
    </div>
    <div class="absolute inset-x-0 bottom-0 pb-10">
      <GlobalLayoutFooter
        :copyright="layoutSetting.copyright"
        icp="company"
      />
    </div>
  </div>
</template>
