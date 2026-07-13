import { useCallback, useRef } from 'react';

const MAX_TILT = 6;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useTiltHover() {
  const ref = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    node.style.setProperty('--mouse-x', `${px * 100}%`);
    node.style.setProperty('--mouse-y', `${py * 100}%`);

    if (prefersReducedMotion()) return;

    const rotateY = (px - 0.5) * MAX_TILT * 2;
    const rotateX = (0.5 - py) * MAX_TILT * 2;

    node.style.transition = 'box-shadow 0.25s ease';
    node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    const node = ref.current;
    if (node) node.classList.add('is-hovering');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove('is-hovering');
    node.style.transition = 'transform 0.4s ease, box-shadow 0.25s ease';
    node.style.transform = '';
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}

export default useTiltHover;
