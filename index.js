// i'm sorry for what you have to witness
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.icons a');
  const text = "joetroll";
  const speed = 100;
  let i = 0;
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: false
});

  typewriter.typeString('joetroll')
    .start();

    

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank');
    });
  });
});
