// makes it so the links open in a new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.icons a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank');
    });
  });
});
