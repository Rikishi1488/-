$(document).ready(function() {
  var panelOne = $('.form-panel.two').height(),
    panelTwo = $('.form-panel.two')[0].scrollHeight;
    

  $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
    e.preventDefault();

    $('.form-toggle').addClass('visible');
    $('.form-panel.one').addClass('hidden');
    $('.form-panel.two').addClass('active');
    $('.form').animate({
      'height': 600
    }, 200);
  });

  $('.form-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).removeClass('visible');
    $('.form-panel.one').removeClass('hidden');
    $('.form-panel.two').removeClass('active');
    $('.form').animate({
      'height': 500
    }, 200);
  });
});


const modal = document.querySelector('.form');
const modalBtn1 = document.querySelector('#regBtn1');
const modalBtn2 = document.querySelector('#regBtn2');
const closeBtn = document.querySelector('#exitbtn');
const closeBtn1 = document.querySelector('#exitbtn1');
const darktheme = document.querySelector('.darktheme');

// Events
closeBtn.addEventListener('click', closeModal);
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
closeBtn1.addEventListener('click', closeModal);

// Open
function openModal() {
  modal.style.display = 'block';
  darktheme.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  darktheme.style.display = 'none';
}

