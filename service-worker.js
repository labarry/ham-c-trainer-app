// 增强版 Service Worker
const CACHE_NAME = 'radio-exam-cache-v1.3.1';
const DYNAMIC_CACHE_NAME = 'radio-exam-dynamic-v1.3.1';

// 安装阶段：只预缓存最核心的静态资源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './manifest.json',
        // 核心JS库
        './config.js',
        './utils.js',
        './storage.js',
        './dialog.js',
        // 主应用逻辑可以预缓存，但题库数据不建议，以便更新
        './app.js',
        './main.js',
        // 图标
        './icons/icon-192x192.png',
        './icons/icon-512x512.png'
      ]);
    }).then(() => {
      // 跳过等待阶段，让新SW立即激活（适合SPA）
      console.log('[Service Worker] 预缓存完成，跳过等待。');
      return self.skipWaiting();
    })
  );
});

// 激活阶段：清理旧缓存，并声明控制权
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] 激活中...');
  event.waitUntil(
    Promise.all([
      // 清理旧版本缓存
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('[Service Worker] 删除旧缓存：', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // 立即对所有客户端生效
      self.clients.claim()
    ]).then(() => {
      console.log('[Service Worker] 已激活并准备就绪。');
      // 可选：通知所有客户端SW已更新
      self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ type: 'SW_ACTIVATED' }));
      });
    })
  );
});

// 拦截请求：动态缓存策略
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // 1. 对同源的API或动态数据请求，采用网络优先策略
  if (requestUrl.origin === self.location.origin && requestUrl.pathname.includes('/api/')) {
    event.respondWith(networkFirstStrategy(event.request));
    return;
  }

  // 2. 对静态资源（JS, CSS, 图片）和文档，采用缓存优先，网络回退策略
  if (requestUrl.origin === self.location.origin) {
    event.respondWith(cacheFirstStrategy(event.request));
    return;
  }

  // 3. 对于第三方资源（如CDN上的字体），采用仅网络策略，不缓存
  // event.respondWith(fetch(event.request));
});

// 网络优先策略（用于可能更新的数据，如 questions.js）
async function networkFirstStrategy(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    // 只缓存成功的响应
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // 网络失败，尝试返回缓存
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('网络离线且无缓存', { status: 503, statusText: 'Service Unavailable' });
  }
}

// 缓存优先策略（用于稳定的静态资源）
async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    // 即使有缓存，也在后台更新缓存（非阻塞）
    fetchAndUpdateCache(request, cache);
    return cachedResponse;
  }
  // 没有缓存，走网络
  return fetchAndUpdateCache(request, cache);
}

// 获取并更新缓存的通用函数
async function fetchAndUpdateCache(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // 对于文档请求（如/），如果连缓存都没有，可以返回一个基础的离线页面
    if (request.mode === 'navigate') {
      return caches.match('./offline.html'); // 您可以创建一个简单的offline.html页面
    }
    throw error;
  }
}

// 接收来自主线程的消息（例如，跳过等待、更新题库）
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});