
document.addEventListener("scroll", (event) => {
  let scroll = window.scrollY;

  if (scroll > 100) {
    document.getElementById('nabar').classList.add('active')
  } else {
    document.getElementById('nabar').classList.remove('active')
  }

});



    
