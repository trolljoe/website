// i'm sorry for what you have to witness
// makes it so the links open in a new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.icons a');
  const text = "joetroll";
  const speed = 100;
  const typingArea = document.getElementById('typewriter');
  let i = 0;

  typingArea.style.visibility = 'visible'; // make the typewriter effect actually visible
  typingArea.innerHTML = ''; // deletes the first line of text

  function typeWriter() {
    if (i < text.length) {
      typingArea.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank');
    });
  });
