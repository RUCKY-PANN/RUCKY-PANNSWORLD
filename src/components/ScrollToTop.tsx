import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    const btn = document.querySelector('.page_top_btn');
    if (btn) {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <div className="page_top_btn">
      <div className="circle_dot"></div>
      <div>TOP</div>
    </div>
  );
}
