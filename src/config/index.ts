import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    expire_in: process.env.JWT_EXPIRE_IN,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expire_in: process.env.REFRESH_TOKEN_EXPIRE_IN,
    reset_password_token: process.env.RESET_PASSWORD_TOKEN,
    reset_password_expire_in: process.env.RESET_PASSWORD_TOKEN_EXPIRE_IN,
  },
  reset_password_link: process.env.RESET_PASSWORD_LINK,
  emailSender: {
    email_send: process.env.MAILSENDER,
    app_password: process.env.APP_PASSWORD,
  },
  cloudinarySecret: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  },
  ssl: {
    storeId: process.env.STORE_ID,
    storePass: process.env.STORE_PASSWD,
    successUrl: process.env.SUCCESS_URL,
    failUrl: process.env.FAIL_URL,
    cancelUrl: process.env.CANCEL_URL,
    sslPaymentApi: process.env.SSL_PAYMENT_API,
    sslValidationApi: process.env.SSL_VALIDATION_API,
  },
};
