import {createApp} from 'vue'
// import { createApp,ComponentPublicInstance } from 'vue/dist/vue.esm-bundler';
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'
import App from './App.vue'
import "@/assets/global.css"
import 'virtual:svg-icons-register'
import SvgIcon from "@/common/SvgIcon.vue";
const app = createApp(App);
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
inject();
app.component('svg-icon', SvgIcon)

// // 应用级别的错误处理器
// app.config.errorHandler = (err: unknown, vm: ComponentPublicInstance | null, info: string) => {
//     console.log('errorHandler', err, vm, info)
// }

//
// Sentry.init({
//     dsn: "https://dec536e004d7b9b5788c8ceae56f28c9@o4506551802068992.ingest.sentry.io/4506551805149184",
//     integrations: [
//         new Sentry.BrowserTracing({
//             // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//             tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//         }),
//         new Sentry.Replay({
//             maskAllText: false,
//             blockAllMedia: false,
//         }),
//     ],
//     // Performance Monitoring
//     tracesSampleRate: 1.0, //  Capture 100% of the transactions
//     // Session Replay
//     replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//     replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

app.mount('#app')

console.log("main.ts loaded!")
console.log("main.ts loaded!")
