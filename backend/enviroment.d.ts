export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_HOST_EMAIL_PASSWORD: string;
      CONNECTION_STRING: string;
    }
  }
}
