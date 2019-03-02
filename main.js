
window.onscroll = function() {toScroll()};

function toScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("back-to-top").style.visibility='visible';
  }
}

document.getElementById("back-to-top").onclick = function() {visHide()};

function visHide() {
  document.getElementById("back-to-top").style.visibility='hidden';
}