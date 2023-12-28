export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);
    navigationHistory.value.push(to.path);
    console.log(
        `Navigated from ${from.path} to ${to.path} and saved to history: ${navigationHistory.value.join('\n')}`
    );
})
