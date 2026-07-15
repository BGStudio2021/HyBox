// 处理应用主题
if (!localStorage.theme) {
    localStorage.theme = 'system'
}
window.api.setTheme(localStorage.theme)