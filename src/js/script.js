import toggleBar from './toggle';

document.addEventListener('DOMContentLoaded', () => {
    toggleBar('.toggle', '.toggle__circle', 'toggle_active', 'toggle__circle_active');
});