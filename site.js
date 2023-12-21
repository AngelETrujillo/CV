
  window.addEventListener('load', () => {
    document.querySelectorAll('.skill').forEach(skill => {
      let percentage = parseInt(skill.dataset.percentage);
      let percentageSpan = skill.querySelector('.percentage');
      let fills = skill.querySelectorAll('.fill');
  
      // Animate the percentage
      let currentPercentage = 0;
      let interval = setInterval(() => {
        currentPercentage++;
        percentageSpan.textContent = `${currentPercentage}%`;
  
        fills.forEach(fill => {
          fill.style.transform = `rotate(${currentPercentage * 1.8}deg)`;
        });
  
        if (currentPercentage === percentage) {
          clearInterval(interval);
        }
      }, 10);
    });
  });
  