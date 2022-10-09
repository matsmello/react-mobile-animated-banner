export const isIOS = () => {
    let platform = navigator?.userAgent || navigator?.platform || 'unknown'

    return /iPhone|iPod|iPad/.test(platform)
}

export const isAndroid = () => {
    const ua = navigator.userAgent.toLowerCase() + navigator?.platform.toLowerCase();
    const isAndroid = ua.indexOf("android") > -1;

    return isAndroid;
}