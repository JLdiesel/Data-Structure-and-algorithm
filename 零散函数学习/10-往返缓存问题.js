// disable bfcache
try {
    var bfWorker = new Worker(window.URL.createObjectURL(new Blob(['1'])));
    window.addEventListener('unload', function () {
        // 这里绑个事件，构造一个闭包，以免 worker 被垃圾回收导致逻辑失效
        bfWorker.terminate();
    });
}
catch (e) {
    // if you want to do something here.
}