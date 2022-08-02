export default function toggleBar(selector, circleSelector, activeClass, circleActiceClass) {
    const toggle = document.querySelector(selector),
          circle = document.querySelector(circleSelector);

    toggle.addEventListener('click', () => {
        if (toggle.classList.contains(activeClass)) {
            toggle.classList.remove(activeClass);
            circle.classList.remove(circleActiceClass);
            toggle.dataset.check = false;
        } else {
            toggle.classList.add(activeClass);
            circle.classList.add(circleActiceClass);
            toggle.dataset.check = true;
        }
    });
}