// Check if service worker is supported

if('serviceWorker' in navigator) {
    console.log("serviceWorker supported."); 
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
            .register('../serviceWorker_cachePages.js')
            .then(reg=>console.log('Service Worker:Registered'))
            .catch(err=>console.log(`Service Worker Error : ${err}`)); 
    })
}