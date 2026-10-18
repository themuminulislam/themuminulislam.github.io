// Sign In
function handleSignIn() {
    alert('Sign In functionality will redirect to login page');
}

// Enroll Course
function enrollCourse(courseName) {
    alert(`You are enrolling in: ${courseName}\n\nThis will redirect to the course enrollment page.`);
}

// Search (only on pages that have the search box)
var searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        console.log('Searching for:', e.target.value.toLowerCase());
    });
}

// Theme (remembered across pages)
const ICON_MOON = '<svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/><path class="acc" d="M17 4v3M15.5 5.5h3"/></svg>';
const ICON_SUN = '<svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path class="acc" d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>';
var isDark = true;
function applyTheme() {
    document.body.classList.toggle('light', !isDark);
    document.body.style.background = isDark
        ? 'linear-gradient(135deg, #0a1628 0%, #1a3a52 50%, #0f2438 100%)'
        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    var t = document.querySelector('.theme-toggle');
    if (t) t.innerHTML = isDark ? ICON_MOON : ICON_SUN;
}
function toggleTheme() {
    isDark = !isDark;
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
    applyTheme();
}
try { if (localStorage.getItem('theme') === 'light') { isDark = false; applyTheme(); } } catch (e) {}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', function () {
    var b = document.querySelector('.scroll-top');
    if (b) b.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

// Smooth scroll for same-page # links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Cart (remembered across pages)
var cartCount = 0;
try { cartCount = parseInt(localStorage.getItem('cart') || '0', 10) || 0; } catch (e) {}
var badge = document.querySelector('.cart-badge');
if (badge) badge.textContent = cartCount;
function updateCart() {
    cartCount++;
    try { localStorage.setItem('cart', cartCount); } catch (e) {}
    if (badge) badge.textContent = cartCount;
}

// Contact form: opens the visitor's email app with the message filled in
var CONTACT_EMAIL = 'your-email@example.com'; // <-- নিজের ইমেইল এখানে দাও
var cf = document.getElementById('contact-form');
if (cf) {
    var et = document.getElementById('email-text'), ec = document.getElementById('email-card');
    if (et) et.textContent = CONTACT_EMAIL;
    if (ec) ec.href = 'mailto:' + CONTACT_EMAIL;
    cf.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('c-name').value;
        var from = document.getElementById('c-email').value;
        var subject = document.getElementById('c-subject').value || 'Website message';
        var msg = document.getElementById('c-msg').value;
        var body = msg + '\n\n— ' + name + ' (' + from + ')';
        window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        document.getElementById('form-status').textContent = 'তোমার ইমেইল অ্যাপ খুলছে। সেখান থেকে Send চাপো।';
    });
}
