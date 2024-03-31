export default defineNuxtRouteMiddleware((to,from)=>{
console.log('MiddleWare!',{to, from});    

})