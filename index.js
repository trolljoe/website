// i'm sorry for what you have to witness

const animationCheckbox = document.getElementById('animationCheckbox');

document.addEventListener('DOMContentLoaded', function() {
  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
    loop: false
});

  typewriter.typeString('joetroll')
    .start();


    });

    animationCheckbox.addEventListener('change', function() {
      const elementsWithAnimation = document.querySelectorAll('.crt, .container');
      if (this.checked) {
        elementsWithAnimation.forEach(element => {
          element.style.animation = 'none';
          element.style.textShadow = 'none';
          element.classList.add('animations-stopped');
        });
      } else {
        elementsWithAnimation.forEach(element => {
          element.style.removeProperty('animation');
          element.style.removeProperty('text-shadow');
          element.classList.remove('animations-stopped');
        });
      }
    });
