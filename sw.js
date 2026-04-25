self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Offline Cache එක පසුව අවශ්‍ය වුවහොත් දාගන්න පුළුවන්. 
    // දැනට Cloud නිසා කෙලින්ම internet එකෙන් වැඩ කරන්න මේක හිස්ව තියන්නේ.
});