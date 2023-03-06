const skills_page_content=document.querySelector('.skills-page-content');

function isInView(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.bottom >= 0
  );
}
function toggleActive() {
  if (isInView(skills_page_content)) {
    skills_page_content.classList.add('active');
  } else {
    skills_page_content.classList.remove('active');
  }
};
window.addEventListener('scroll', toggleActive);
