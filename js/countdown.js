// Function to create a countdown for an event
function createEventCountdown(eventName, year, month, day, hour = 0, minute = 0, second = 0, link = '', linkText = '') {
    // Create the HTML structure
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    
    const eventHTML = `
        <h2>${eventName} <a href="${link}" target="_blank" style="text-decoration: none; color: inherit;">${linkText}</a></h2>
        <div id="${eventName.replace(/\s+/g, '-').toLowerCase()}-countdown" class="countdown">
            <div class="time-block">
                <span class="days">00</span>
                <span class="label">Days</span>
            </div>
            <div class="time-block">
                <span class="hours">00</span>
                <span class="label">Hours</span>
            </div>
            <div class="time-block">
                <span class="minutes">00</span>
                <span class="label">Minutes</span>
            </div>
            <div class="time-block">
                <span class="seconds">00</span>
                <span class="label">Seconds</span>
            </div>
        </div>
    `;
    
    eventDiv.innerHTML = eventHTML;
    document.querySelector('.countdown-container').appendChild(eventDiv);
    
    // Set up the countdown
    const targetDate = new Date(year, month - 1, day, hour, minute, second);
    const countdownId = `${eventName.replace(/\s+/g, '-').toLowerCase()}-countdown`;
    
    function updateCountdown() {
        const countdown = document.getElementById(countdownId);
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        if (difference <= 0) {
            countdown.innerHTML = '<h3>Event has started!</h3>';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
        countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Add your events here (name, year, month, day, hour, minute, second, event link, event code)
createEventCountdown('Robot complete!', 2025, 2, 9, 8, 0, 0, 'https://www.thebluealliance.com/team/2438', '');
createEventCountdown('Canadian Pacific Regional', 2025, 2, 16, 0, 0, 0, 'https://frc-events.firstinspires.org/2025/BCVI', '(BCVI)');
createEventCountdown('Hawaii Regional', 2025, 3, 20, 0, 0, 0, 'https://frc-events.firstinspires.org/2025/HIHO', '(HIHO)');
createEventCountdown('World Championship', 2025, 4, 16, 0, 0, 0, 'https://frc-events.firstinspires.org/2025/CMPTX', '(CMPTX)');