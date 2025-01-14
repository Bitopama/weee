document.addEventListener('DOMContentLoaded', () => {
    // Birthday Wishes Bar Chart
    const ctx = document.getElementById('birthdayChart').getContext('2d');
    const birthdayChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Joy', 'Happiness', 'Health', 'Success', 'Love'],
            datasets: [{
                label: 'Bitopama',
                data: [100, 100, 100, 100, 100],
                backgroundColor: [
                    '#5a3e36',
                    '#a97c66',
                    '#d9cbc7',
                    '#f4e6d9',
                    '#f7f4f0'
                ],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Countdown Timer
    const countdownElement = document.querySelector(".countdown");
    function updateCountdown() {
        const birthday = new Date("January 20, 2025");
        const now = new Date();
        const timeLeft = birthday - now;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        countdownElement.textContent = `Time Left: ${daysLeft} Days`;
    }

    setInterval(updateCountdown, 1000);

    // Submit a Birthday Wish
    const submitWish = () => {
        const input = document.getElementById('birthdayWish');
        const wish = input.value.trim();
        if (wish) {
            const list = document.getElementById('wishesList');
            const listItem = document.createElement('li');
            listItem.textContent = wish;
            list.appendChild(listItem);
            input.value = '';
        } else {
            alert('Please write a wish before submitting!');
        }
    };

    // Display message when a photo is clicked
    const displayMessage = (photo) => {
        const messages = {
            photo1: 'This is a lovely memory from our trip!',
            photo2: 'Remember this special day?',
            photo3: 'A moment worth cherishing forever!'
        };
        alert(messages[photo]);
    };

    // Pie Chart (interactive)
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Reading', 'Coding', 'Cooking', 'Traveling', 'Movies'],
            datasets: [{
                data: [5, 10, 7, 8, 6], // Fun facts about your sister
                backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71', '#3498db', '#9b59b6'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const labels = ['Her love for books', 'Her passion for coding', 'Her culinary skills', 'Her travel adventures', 'Her movie nights'];
                            return `${labels[tooltipItem.dataIndex]}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Hover interaction for Pie Chart sections
    const sections = document.querySelectorAll('.pie-chart-container .section');
    sections.forEach((section) => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.1)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
        });
    });

    window.submitWish = submitWish;
    window.displayMessage = displayMessage;
});
