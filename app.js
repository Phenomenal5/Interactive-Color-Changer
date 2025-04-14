document.addEventListener('DOMContentLoaded', function(){
    const colorBox = document.getElementById('color-box');
    const btn = document.getElementById('change-color-btn');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    btn.addEventListener('click', function() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
        
    });
});