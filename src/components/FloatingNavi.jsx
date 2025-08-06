import { useEffect } from 'react';

export default function FloatingNavScript() {
  useEffect(() => {
    const nav = document.querySelector('.floating-nav');
    const btn = document.getElementById('next-area-button');

    const areaPaths = [
      '/areaMap/koala/',
      '/areaMap/cat/',
      '/areaMap/hipo/',
      '/areaMap/tanuki/',
      '/areaMap/panda/',
      '/areaMap/companion/',
      '/areaMap/dog/',
      '/areaMap/penguin/',
      '/areaMap/dark/',
      '/areaMap/rp/',
      '/areaMap/event/',
      '/areaMap/other/',
    ];

    const handleScroll = () => {
      if (window.scrollY > 600) {
        nav?.classList.add('visible-nav');
        nav?.classList.remove('hidden-nav');
      } else {
        nav?.classList.remove('visible-nav');
        nav?.classList.add('hidden-nav');
      }
    };

    const handleClick = (e) => {
      e.preventDefault();
      const randomPath =
        areaPaths[Math.floor(Math.random() * areaPaths.length)];
      window.location.href = randomPath;
    };

    window.addEventListener('scroll', handleScroll);
    btn?.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      btn?.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
