// 工具函数：节流
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// 工具函数：格式化数字
const formatNumber = (num, suffix = '') => {
    return num.toLocaleString() + suffix;
};

// 模块：能力条动画
const initCapabilityMeters = () => {
    const meters = document.querySelectorAll('.capability-meter');
    meters.forEach(meter => {
        const level = meter.getAttribute('data-level') || '85';
        meter.style.setProperty('--level', `${level}%`);
    });
};

// 模块：滚动视差效果（带节流优化）
const initParallaxEffect = () => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    const handleScroll = throttle(() => {
        hero.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
};

// 模块：数字统计递增效果（优化版）
const animateNumber = (element) => {
    const target = element.innerText.trim();
    const numeric = parseFloat(target);
    if (isNaN(numeric)) return;
    
    const suffix = target.replace(/[0-9.,]/g, '');
    const duration = 2000; // 2 秒动画
    const startTime = performance.now();
    const startValue = 0;
    
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4); // 缓动函数
    
    const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = startValue + (numeric - startValue) * easedProgress;
        
        element.innerText = formatNumber(Math.floor(currentValue), suffix);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.innerText = formatNumber(numeric, suffix);
        }
    };
    
    requestAnimationFrame(update);
};

const initStatNumbers = () => {
    const statsContainer = document.querySelector('.hero-stats');
    if (!statsContainer) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(num => animateNumber(num));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsContainer);
};

// 模块：导航平滑滚动
const initSmoothScroll = () => {
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
};

// 模块：鼠标跟随光晕效果（优化版）
const initGlowEffect = () => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    const orbs = document.querySelectorAll('.hero-orb');
    if (orbs.length === 0) return;
    
    const handleMouseMove = throttle((e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) * 0.05;
        const y = (e.clientY - rect.top) * 0.05;
        
        orbs.forEach(orb => {
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    }, 16);
    
    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
};

// 初始化所有模块
document.addEventListener('DOMContentLoaded', () => {
    initCapabilityMeters();
    initParallaxEffect();
    initStatNumbers();
    initSmoothScroll();
});

window.addEventListener('load', initGlowEffect);
