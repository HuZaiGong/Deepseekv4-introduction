// 能力指标动画
document.addEventListener('DOMContentLoaded', () => {
    // 能力条填充动画
    const meters = document.querySelectorAll('.capability-meter');
    meters.forEach(meter => {
        const level = meter.getAttribute('data-level') || '85';
        meter.style.setProperty('--level', `${level}%`);
    });

    // 滚动视差效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // 数字统计递增效果
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumber = (element) => {
        const target = element.innerText;
        let numeric = parseFloat(target);
        if (isNaN(numeric)) return;
        
        const suffix = target.replace(/[0-9.]/g, '');
        let current = 0;
        const increment = numeric / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
                element.innerText = numeric.toLocaleString() + suffix;
                clearInterval(timer);
            } else {
                element.innerText = Math.floor(current).toLocaleString() + suffix;
            }
        }, 20);
    };

    // 使用 Intersection Observer 触发数字动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(num => animateNumber(num));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) observer.observe(statsContainer);

    // 导航平滑滚动
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// 添加鼠标跟随光晕效果（可选）
const createGlowEffect = () => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const orbs = document.querySelectorAll('.hero-orb');
        orbs.forEach((orb, index) => {
            if (orb) {
                orb.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            }
        });
    });
};

// 延迟执行确保 DOM 完全加载
window.addEventListener('load', createGlowEffect);
