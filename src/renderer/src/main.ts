import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './theme'

createApp(App).mount('#app')

declare global {
    interface Window {
        api: {
            minimizeWindow: () => void,
            maximizeWindow: () => void,
            closeWindow: () => void,
            onOsVersion: (callback: (version: string) => void) => void,
            getAppVersion: () => Promise<string>,
            setTheme: (value: string) => void
        }
    }
}