const urlParams = new URLSearchParams(window.location.search);
const memberID = urlParams.get('ml_sub1') || urlParams.get('abm_sub1');

// LINK LOCKER ABM
let abmLink = "https://unlock-file.com/?b83855f";

if (memberID) {
    const separator = abmLink.includes("?") ? "&" : "?";
    abmLink = `${abmLink}${separator}s1=${memberID}`; 
}

document.addEventListener("DOMContentLoaded", () => {
    const lockerBtn = document.getElementById("lockerLink");
    if(lockerBtn) lockerBtn.href = abmLink;
});

function selectDevice(el) {
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

function processStep1() {
    const user = document.getElementById('usernameInput').value;
    if(!user) { alert("Enter Traveler ID!"); return; }
    
    const bgm = document.getElementById('bgMusic');
    if(bgm) { bgm.volume = 0.4; bgm.play().catch(() => {}); }

    document.getElementById('displayUsername').innerText = user;
    const display2 = document.getElementById('displayUsername2');
    if(display2) display2.innerText = user;

    document.querySelector('#step1 .cta-btn').style.display = 'none';
    document.getElementById('loading1').style.display = 'block';

    let w = 0;
    const bar = document.getElementById('progressBar1');
    const txt = document.getElementById('loadingText1');
    const sIcon = document.getElementById('successIcon');
    const hIcon = document.getElementById('searchIcon');

    const intv = setInterval(() => {
        w += 1; bar.style.width = w + '%';
        if(w === 40) txt.innerText = "Exploring Islands...";
        if(w === 80) txt.innerText = "Traveler Found!";
        if(w >= 100) {
            clearInterval(intv);
            hIcon.style.display = 'none';
            sIcon.style.display = 'block';
            txt.style.color = "#28a745";
            sIcon.style.color = "#28a745";
            setTimeout(() => {
                document.getElementById('step1').style.display = 'none';
                document.getElementById('step2').style.display = 'block';
            }, 1500);
        }
    }, 80);
}

function switchTab(type) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-energy').style.display = 'none';
    document.getElementById('tab-diamonds').style.display = 'none';
    if(type === 'energy') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        document.getElementById('tab-energy').style.display = 'grid';
    } else {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        document.getElementById('tab-diamonds').style.display = 'grid';
    }
}

function startClaimProcess(item) {
    document.getElementById('selectedItemName').innerText = item;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step-loading').style.display = 'block';

    let p = 0;
    const pBar = document.getElementById('progressBarGen');
    const cTxt = document.getElementById('consoleText');
    const spinner = document.getElementById('loadingSpinner');
    const success = document.getElementById('successIconGen');
    const title = document.getElementById('loadingTitle');

    const timer = setInterval(() => {
        p += 1; pBar.style.width = p + '%';
        if(p === 40) cTxt.innerText = "Merging Items...";
        if(p === 80) cTxt.innerText = "Syncing Rewards...";
        if(p >= 100) {
            clearInterval(timer);
            spinner.style.display = 'none';
            success.style.display = 'block';
            cTxt.innerText = "Merge Successful!";
            cTxt.style.color = "#28a745";
            title.innerText = "SUCCESS!";
            title.style.color = "#28a745";
            setTimeout(() => {
                document.getElementById('step-loading').style.display = 'none';
                document.getElementById('step3').style.display = 'block';
            }, 2000);
        }
    }, 100);
}

function lacakKlikCPA(e, url) {
    if(e) e.preventDefault();
    window._Hasync = window._Hasync || [];
    window._Hasync.push(['Histats.start', '1,5013362,4,0,0,0,00010000']);
    const hs = document.createElement('script'); hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    setTimeout(() => { window.location.href = url; }, 600);
}

const dbKomentar = [
    { name: "Emma W.", text: "Merged the items perfectly, got 5000 energy!", img: "2" },
    { name: "Lucas M.", text: "Is this safe? Edit: Yes, it works flawless.", img: "11" },
    { name: "Mila J.", text: "Finally I can finish my island event.", img: "5" },
    { name: "Liam K.", text: "Very fast sync. Thanks!", img: "8" },
    { name: "Chloe S.", text: "Just got my 10,000 diamonds jackpot!", img: "9" },
    { name: "Sven T.", text: "Worked on my iPad.", img: "12" }
];

function tampilkanKomen() {
    const box = document.getElementById('dynamicComments');
    if(!box) return;
    box.style.opacity = '0';
    setTimeout(() => {
        const acak = dbKomentar.sort(() => 0.5 - Math.random()).slice(0, 2);
        box.innerHTML = '';
        acak.forEach(item => { box.innerHTML += `<div class="comment-item"><img src="https://i.pravatar.cc/150?img=${item.img}" class="comment-avatar"><div class="comment-body"><div class="comment-name">${item.name} <span class="comment-time">just now</span></div><div class="comment-text">${item.text}</div></div></div>`; });
        box.style.opacity = '1';
    }, 500);
}
setInterval(tampilkanKomen, 7000);
document.addEventListener("DOMContentLoaded", tampilkanKomen);

document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = e => { if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) return false; };

const travelers = ["Emma", "Lucas", "Mila", "Liam", "Noah", "Chloe", "Sven", "Mizu", "Daiki"];
setInterval(() => {
    const noti = document.getElementById('live-notification');
    if(!noti) return;
    document.getElementById('noti-name').innerText = travelers[Math.floor(Math.random()*travelers.length)];
    noti.classList.add('show');
    setTimeout(() => noti.classList.remove('show'), 4000);
}, 15000);
