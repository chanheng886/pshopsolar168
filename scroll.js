// Category scroll functionality (works without left/right buttons)
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.browse-scroll');
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');

    if (!scrollContainer) return;

    // Optional: update button states if buttons exist
    const updateScrollButtons = () => {
        if (!leftBtn && !rightBtn) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        if (leftBtn) leftBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        if (rightBtn) rightBtn.style.opacity = scrollLeft < scrollWidth - clientWidth ? '1' : '0.5';
    };

    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Drag to scroll (mouse)
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    scrollContainer.style.cursor = 'grab';

    scrollContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        scrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollContainer.offsetLeft;
        startScrollLeft = scrollContainer.scrollLeft;
    });

    const endDrag = () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    };

    scrollContainer.addEventListener('mouseleave', endDrag);
    scrollContainer.addEventListener('mouseup', endDrag);

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast multiplier
        scrollContainer.scrollLeft = startScrollLeft - walk;
    });

    // Touch events for mobile (keep default touch scrolling, but support touch drag emulation if needed)
    scrollContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        startScrollLeft = scrollContainer.scrollLeft;
    }, { passive: true });

    scrollContainer.addEventListener('touchmove', (e) => {
        // Don't call preventDefault here so native scrolling works smoothly on mobile
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = startScrollLeft - walk;
    }, { passive: true });

    // Update buttons (if any) on scroll
    scrollContainer.addEventListener('scroll', updateScrollButtons);

    // Initial state
    updateScrollButtons();
});