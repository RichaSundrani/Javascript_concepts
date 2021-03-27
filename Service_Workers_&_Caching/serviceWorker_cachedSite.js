const cacheName = 'v1';
const cacheAssets = [
    // all the web assets to cache
    'index.html'
]

// Call install event 
self.addEventListener('install', (event)=>{
    console.log('Service worker : Installed');
    event.waitUntil(
        caches
           .open(cacheName)
           .then(cache =>{
               console.log('Service Worker: caching files'); 
               cache.addAll(cacheAssets);
           })
           .then(()=>self.skipWaiting())
    )
});

// Call activate event 
self.addEventListener('activate', (event)=>{
    console.log('Service worker : Activated');
    event.waitUntil(
        cache.keys().then(cacheName =>{
            return Promise.all(
                cacheName.map(cache=> {
                    if(cache !== cacheName){
                        console.log('Service worker: clearing old cache'); 
                        return cache.delete(cache);
                    }
                })
            )
        })
    )
});

// Call fetch event
self.addEventListener('fetch', event =>{
    console.log('Service Worker: fetching'); 
    event.respondWith (
        fetch(event.request).catch(()=>{caches.match(event.request)})
    )
}); 

// Call fetch event
self.addEventListener('fetch', event=>{
    
})