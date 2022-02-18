
export default function navHashLink() {
    let hash = location.hash.replace("#", '');
    let el = document.querySelector(`${location.hash},[hash='${hash}']`)
    if(hash && el) {
        el.scrollIntoView();
    }
}