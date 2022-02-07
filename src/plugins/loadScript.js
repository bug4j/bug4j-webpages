const cachedScripts = {};

async function loadResource(url, tagName) {
    if(cachedScripts[url]) return ++cachedScripts[url];
    const resp = await fetch(url)
    const text = await resp.text();
    const el = document.createElement(tagName);
    el.setAttribute('data-url', url);
    el.innerHTML = text;
    document.head.appendChild(el);
    cachedScripts[url] = 0;
    return text;
}

function removeResource(url) {
    cachedScripts[url] = (cachedScripts[url] || 0) - 1;
    if(cachedScripts[url] <= 0) {
        Reflect.deleteProperty(cachedScripts, url);
        document.querySelector(`style[data-url="${url}"],script[data-url="${url}"]`).remove();
    }
}

function loadStyle() {
    return loadResource(url, 'style');
}

function loadScript(url) {
    return loadResource(url, 'script');
}

export { loadScript, loadStyle, removeResource }