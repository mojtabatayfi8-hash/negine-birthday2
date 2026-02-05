// تاریخ تولد نگینه - 25 بهمن 1403
const birthday = new Date(2025, 1, 13); // 13 فوریه 2025 = 25 بهمن 1403

// شمارشگر معکوس
function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    
    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = 
            '<div class="birthday-message">🎉 امروز تولد نگینه عزیزه! 🎂</div>';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// پخش کننده موسیقی
const audio = document.getElementById('birthday-song');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-volume-up"></i> در حال پخش';
    playBtn.style.background = '#4cc9f0';
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i> پخش آهنگ';
    playBtn.style.background = '#ff006e';
});

// پاپ‌آپ سورپرایز
const surpriseBtn = document.getElementById('surprise-btn');
const popup = document.getElementById('surprise-popup');
const closePopup = document.querySelector('.close-popup');

surpriseBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    // پخش صدای سورپرایز اگر بخواهید
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// بستن پاپ‌آپ با کلیک بیرون
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// تغییر تصویر با کلیک (ویژه)
const profileImg = document.getElementById('profile-img');
let imgIndex = 0;
const images = ['images/negine.jpg', 'images/heart.png']; // تصاویر دیگر اضافه کنید

profileImg.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % images.length;
    profileImg.src = images[imgIndex];
});

// اجرای اولیه
updateCountdown();
setInterval(updateCountdown, 1000);

// انیمیشن برای دکمه‌ها هنگام بارگذاری
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.header, .countdown-section, .message-box');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    // پخش خودکار موسیقی (اختیاری - می‌توانید غیرفعال کنید)
    // audio.play().catch(e => console.log("اتوماتیک پخش نشد - نیاز به تعامل کاربر"));
});