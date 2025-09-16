// Додаємо горизонтальний скрол за допомогою колеса миші (на десктопі)
window.addEventListener('DOMContentLoaded', function () {
  // Знаходимо елемент з класом 'colon'
  var scroller = document.querySelector('.colon');
  if (!scroller) return; // Якщо не знайдено — виходимо

  // Додаємо обробник події wheel
  scroller.addEventListener('wheel', function (event) {
    // Якщо вертикальна прокрутка більша за горизонтальну
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault(); // Відміняємо стандартну поведінку
      scroller.scrollLeft += event.deltaY; // Прокручуємо горизонтально
    }
  }, { passive: false }); // Вказуємо, що обробник не пасивний (щоб працював preventDefault)

  // Модальне вікно для фото
  var modal = document.getElementById('photoModal');
  var modalImg = document.getElementById('modalImage');
  var closeBtn = document.getElementsByClassName('close')[0];

  // Додаємо обробники кліків на всі фото
  var images = scroller.querySelectorAll('img');
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Блокуємо прокрутку фону
    });
  });

  // Закриття модального вікна при кліку на X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Відновлюємо прокрутку
  });

  // Закриття модального вікна при кліку поза ним
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Закриття модального вікна клавішею Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});


