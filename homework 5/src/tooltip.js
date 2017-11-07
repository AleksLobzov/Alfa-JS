export default function init(options) {
    let tooltips = document.querySelectorAll('.tooltip-item');

    tooltips.forEach(tooltip => {
        tooltip.style.display = 'none';

        let parent = tooltip.parentNode;

        parent.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        parent.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
}
