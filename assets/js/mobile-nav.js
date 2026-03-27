(function(){
  function init(){
    var navs=document.querySelectorAll('.dt-nav');
    if(!navs.length) return;

    navs.forEach(function(nav){
      if(nav.dataset.mobileReady==='1') return;
      var wrap=nav.querySelector('.dt-nav__wrap');
      var menu=nav.querySelector('.dt-nav__menu');
      if(!wrap || !menu) return;

      var burger=document.createElement('button');
      burger.type='button';
      burger.className='dt-nav__burger';
      burger.setAttribute('aria-label','Open menu');
      burger.setAttribute('aria-expanded','false');
      burger.innerHTML='<span class="dt-nav__burgerLine"></span><span class="dt-nav__burgerLine"></span><span class="dt-nav__burgerLine"></span>';

      var overlay=document.createElement('div');
      overlay.className='dt-nav__overlay';

      function closeMenu(){
        nav.classList.remove('is-open-mobile');
        document.documentElement.classList.remove('dt-nav-open');
        burger.setAttribute('aria-expanded','false');
      }
      function openMenu(){
        nav.classList.add('is-open-mobile');
        document.documentElement.classList.add('dt-nav-open');
        burger.setAttribute('aria-expanded','true');
      }

      burger.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(nav.classList.contains('is-open-mobile')) closeMenu(); else openMenu();
      });

      overlay.addEventListener('click', closeMenu);

      menu.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ closeMenu(); });
      });

      document.addEventListener('keydown', function(e){
        if(e.key==='Escape') closeMenu();
      });

      window.addEventListener('resize', function(){
        if(window.innerWidth>960) closeMenu();
      });

      // keep nav dark on scroll
      function syncScroll(){
        if(window.scrollY>8) nav.classList.add('is-scrolled');
        else nav.classList.remove('is-scrolled');
      }
      syncScroll();
      window.addEventListener('scroll', syncScroll, {passive:true});

      wrap.appendChild(burger);
      nav.appendChild(overlay);
      nav.dataset.mobileReady='1';
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
