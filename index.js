// i'm sorry for what you have to witness
document.addEventListener('DOMContentLoaded', function() {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: false
});

  typewriter.typeString('joetroll')
    .start();


    });
