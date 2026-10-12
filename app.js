const grid = document.querySelector('#car-grid');
const nameEl = document.querySelector('#selected-name');
const descEl = document.querySelector('#selected-desc');
const speedEl = document.querySelector('#speed-label');
const accelEl = document.querySelector('#accel-label');
const notice = document.querySelector('#notice');
const spawnBtn = document.querySelector('#spawn-btn');
let selectedId = CARS[0].id;

function selectCar(car) {
  selectedId = car.id;
  document.querySelectorAll('.car-card').forEach(button => {
    const active = button.dataset.id === car.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  nameEl.textContent = car.name;
  descEl.textContent = car.desc;
  speedEl.textContent = car.speed;
  accelEl.textContent = car.accel;
  notice.textContent = 'تم اختيار ' + car.name + ' في الواجهة. الربط الفعلي باللعبة غير مضاف بعد.';
}

CARS.forEach((car, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'car-card' + (index === 0 ? ' active' : '');
  button.dataset.id = car.id;
  button.setAttribute('aria-pressed', String(index === 0));
  button.innerHTML = `<span class="car-number">0${index + 1} / VEHICLE</span><span class="car-icon" aria-hidden="true">▰</span><strong dir="ltr">${car.name}</strong><small>${car.type}</small>`;
  button.addEventListener('click', () => selectCar(car));
  grid.appendChild(button);
});

document.querySelector('#car-count').textContent = String(CARS.length).padStart(2, '0');
spawnBtn.addEventListener('click', () => {
  const car = CARS.find(item => item.id === selectedId);
  notice.textContent = `تم تحديد ${car.name}. هذا النموذج لا يستدعي سيارة داخل GTA V؛ يلزم تطوير مكوّن تشغيل داخل اللعبة وربطه بالواجهة.`;
});
