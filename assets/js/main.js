let openBTN = document.getElementById('openMenu');
let mMENU = document.getElementById('mMenu');
openBTN.addEventListener('click', () => {
    mMENU.style.display = '';
})
mMENU.addEventListener('click', () => {
    document.getElementById('mMenu').style.display = 'none';
})
function submitForm(num) {
    let ten = document.getElementById(`hoten${num}`).value;
    let sdt = document.getElementById(`sdt${num}`).value;
    let mail = document.getElementById(`mail${num}`).value;
    let loai = document.getElementById(`loai${num}`).value;
    let noiDung = document.getElementById(`noiDung${num}`).value;
    submitToGoogleForms(ten,sdt,mail,loai,noiDung)
}
async function submitToGoogleForms(ten, sdt, mail, loai, noiDung) {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSm0xDzzsX6IT_I7QwZuKektVJg99MSUFmz0Vk2rpd2Fd-oQ/formResponse';
    const formData = new URLSearchParams({
        'entry.1478062472': ten,
        'entry.371385192': sdt,
        'entry.1271654657': mail,
        'entry.60446510': loai,
        'entry.1657563135': noiDung
    });
    try {
        const response = await fetch(formUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (response.ok) {
            window.location = '/thanks';
        } else {
            window.location = '/thanks';
        }
    } catch (error) {
        window.location = '/thanks';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tabbed-content > ul > li');
    const tabPanels = document.querySelectorAll('.tab-panels > .panel');
    function activateTab(tabId) {
        tabButtons.forEach(button => button.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Activate the selected tab and panel
        const selectedTab = document.querySelector(`#tab-${tabId}`);
        const selectedPanel = document.querySelector(`#${tabId}`);

        if (selectedTab && selectedPanel) {
            selectedTab.classList.add('active');
            selectedPanel.classList.add('active');
        }
    }
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.querySelector('a').getAttribute('href').substring(1);
            activateTab(tabId);
        });
    });
});