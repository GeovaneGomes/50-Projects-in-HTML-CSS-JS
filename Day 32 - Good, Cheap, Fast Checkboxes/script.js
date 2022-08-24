const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change',
(e) => doTheTrick(e.target)));

function doTheTrick(theClickdOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickdOne) {
            fast.checked = false;
        }

        if(cheap === theClickdOne) {
            good.checked = false;
        }

        if(fast === theClickdOne) {
            cheap.checked = false;
        }
    }
}