window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  })
  $(document).ready(function () {
    $('.choice-button').on('click', function () {
      const choice = $(this).data('choice');
      const $feedback = $('#feedback');
  
      const message = choice === 'real'
        ? 'You chose: Real artwork! ✅'
        : 'You chose: AI artwork ❌';
  
      const colorClass = choice === 'real' ? 'text-success' : 'text-danger';
  
      $feedback
        .removeClass('text-success text-danger')
        .addClass(colorClass)
        .text(message)
        .fadeIn()
        .delay(2000)
        .fadeOut();
    });
  });
  