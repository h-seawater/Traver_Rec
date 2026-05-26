// dropdown
function toggleDropdown(id) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.id === id
            ? item.classList.toggle('open')
            : item.classList.remove('open');
    });
}

// traver.html의 
const festivals = [
    { tag: '대표 축제',   name: '부처님 오신 날\n연등 축제', location: '서울 종로 · 전국',  date: '5.12 — 5.14', img: '부처님.jpg'},
    { tag: '자연 · 꽃',   name: '장미 축제',                location: '울산 태화강',       date: '5.10 — 5.19', img: '장미.jpg'},
    { tag: '문화 · 전통', name: '부산원아시아페스티벌',      location: '부산아시아주경기장', date: '6.8 — 6.9', img: '원아시아.jpg'},
    { tag: '음악 · 예술', name: '서울 재즈 페스티벌',        location: '서울 올림픽공원',   date: '5.24 — 5.26', img: '재즈.jpg'},
];
 

function render() {
    document.getElementById('festivalGrid').innerHTML = festivals.map(f => `
        <div class="festival-card">
            <img src="${f.img}" alt="${f.tag}" class="festival-card-img">
            <div class="festival-card-tag">${f.tag}</div>
            <div class="festival-card-name">${f.name.replace('\n', '<br>')}</div>
            <div class="festival-card-location">${f.location}</div>
            <div class="festival-card-date">${f.date}</div>
        </div>`).join('');
}
 
render();