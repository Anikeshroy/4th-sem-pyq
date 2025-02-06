// Script to handle subject toggling and paper viewing
document.addEventListener('DOMContentLoaded', () => {
    // Toggle subject papers visibility
    const subjectToggles = document.querySelectorAll('.subject-toggle');
    subjectToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const papers = toggle.nextElementSibling;
            if (papers.style.display === 'none' || papers.style.display === '') {
                papers.style.display = 'block';
            } else {
                papers.style.display = 'none';
            }
        });
    });
});
