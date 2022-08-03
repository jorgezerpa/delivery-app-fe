export function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}

export function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}
  
export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie); // to handle special chars
    let cookies = decodedCookie.split(';');
    let cookieIndex = cookies.findIndex(cookie=> cookie.includes(name));
    if(cookieIndex>=0){
        return cookies[cookieIndex].replace('token=', '');
    }
    return false;
}