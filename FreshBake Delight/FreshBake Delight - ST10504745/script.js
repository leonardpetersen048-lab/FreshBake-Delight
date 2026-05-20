
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const year = document.getElementById("year");
    if(year){
        year.textContent = new Date().getFullYear();
    }
});
