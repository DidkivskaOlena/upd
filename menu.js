(() => {
    const refs = {
        openMenuBtn: document.querySelector('#menuToggle'),
        checkbox: document.querySelector('#checkbox'),
        closeMenuForLink1: document.querySelector('.l1'),
        closeMenuForLink2: document.querySelector('.l2'),
        closeMenuForLink3: document.querySelector('.l3'),
        closeMenuForPhone1: document.querySelector('.c1'),
        closeMenuForPhone2: document.querySelector('.c2'),
        menu: document.querySelector('#menu'),
        body: document.querySelector('body'),
      };
    
      refs.openMenuBtn.addEventListener('click', toggleMenu);
    
      refs.closeMenuForLink1.addEventListener('click', toggleMenuInput);
      refs.closeMenuForLink2.addEventListener('click', toggleMenuInput);
      refs.closeMenuForLink3.addEventListener('click', toggleMenuInput);
      refs.closeMenuForPhone1.addEventListener('click', toggleMenuInput);
      refs.closeMenuForPhone2.addEventListener('click', toggleMenuInput);
      
      function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
      }
      function toggleMenuInput() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
        refs.checkbox.checked = false;
        if (checkbox.checked) {
            console.log('Checkbox is checked!');
        } else {
            console.log('Checkbox is not checked.');
            refs.menu.classList.toggle('is-hidden');
            refs.body.classList.toggle('no-scroll');
        }
      }
  })();