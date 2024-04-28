// i'm sorry for what you have to witness
// makes it so the links open in a new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.icons a');
  const text = "joetroll";
  const speed = 100;
  let i = 0;
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: true
});

  typewriter.typeString('joetroll')

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank');
    });
  });
});
