// src/app/server-time.worker.ts
var clockInterval;
var count = 0;
addEventListener("message", ({ data }) => {
  if (data && data.serverTime) {
    let currentServerTime = new Date(data.serverTime);
    clearInterval(clockInterval);
    if (!data.idle) {
      clockInterval = setInterval(() => {
        currentServerTime.setMilliseconds(currentServerTime.getMilliseconds() + 1e3);
        if (count > 600 && !data.idle) {
          postMessage({
            serverTime: currentServerTime,
            refresh: true
          });
          count = 0;
        } else {
          postMessage({
            serverTime: currentServerTime,
            refresh: false
          });
          count++;
        }
      }, 1e3);
    }
  }
});
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
