const data = [
    { date: '2025-11-15', day: 'Day 1', dayName: 'Saturday', time: '19:50', activity: 'Flight Departure', location: 'Ho Chi Minh/Tokyo', details: 'Depart', cost: '', notes: '✈️' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '07:45', activity: 'Flight Arrival', location: 'Narita Terminal 1', details: 'Arrive Tokyo', cost: '', notes: '🟢 START' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '09:47', activity: 'Train', location: 'Narita Terminal 1 → Minowa Station', details: 'Travel to hotel', cost: '¥1,240', notes: '' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '12:00', activity: 'Hotel Check-in', location: 'Maru 5 Inn', details: 'Check-in', cost: '', notes: '🏨' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '12:46', activity: 'Train', location: 'Minowa → Asakusa Station', details: 'Go to Senso-ji', cost: '¥180', notes: '' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '13:30', activity: 'Meal', location: 'Senso-ji area', details: 'Lunch', cost: '', notes: '🍽️' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '14:30', activity: 'Sightseeing', location: 'Senso-ji Temple', details: 'Visit Kaminari-mon, Nakamise Street', cost: '', notes: '📸' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:08', activity: 'Train', location: 'Asakusa → Oshiage Station', details: 'Go to Tokyo Skytree', cost: '¥180', notes: '' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:36', activity: 'Sightseeing', location: 'Tokyo Skytree', details: 'Visit', cost: '', notes: '📸' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:36', activity: 'Train', location: 'Oshiage → Akihabara Station', details: 'Go to Akihabara', cost: '¥290', notes: '' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '19:32', activity: 'Train', location: 'Akihabara → Ueno Station', details: 'Go to Ueno', cost: '¥180', notes: '' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '20:00', activity: 'Meal', location: 'Ueno Park', details: 'Dinner', cost: '', notes: '🍽️' },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '21:00', activity: 'Hotel Return', location: 'Maru 5 Inn', details: 'Back to hotel', cost: '', notes: '🏨' },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Tsujiki Market', details: 'Explore market', cost: '', notes: '📸' },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Imperial Palace', details: 'Visit palace', cost: '', notes: '📸' },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Tokyo Tower', details: 'Visit tower', cost: '', notes: '📸' },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'PM', activity: 'Sightseeing', location: 'Roppongi Hills', details: 'Explore', cost: '', notes: '📸' },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'Evening', activity: 'Meal', location: 'Tokyo Ramen Street', details: 'Dinner', cost: '', notes: '🍜' },
    { date: '2025-11-18', day: 'Day 4', dayName: 'Tuesday', time: 'All Day', activity: 'Day Trip', location: 'Nikko', details: 'Full day trip', cost: '', notes: '⛩️' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '07:20', activity: 'Shuttle Bus', location: 'Akihabara → Kawaguchiko', details: 'VIP Liner to Mt. Fuji', cost: '', notes: '🟢' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '09:10', activity: 'Bus Arrival', location: 'Kawaguchiko Station', details: 'Arrive Mt. Fuji area', cost: '', notes: '' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '09:30', activity: 'Hotel Check-in', location: 'Fuji Scenic House 73', details: 'Check-in', cost: '', notes: '🏨' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '11:00', activity: 'Activity', location: 'LAWSON Kawaguchiko', details: 'Photo stop', cost: '', notes: '📸' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:00', activity: 'Meal', location: 'Kawaguchiko', details: 'Lunch', cost: '', notes: '🍽️' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:00', activity: 'Bus Tour', location: 'Oike Park', details: 'Sightseeing (5 mins)', cost: '', notes: '🚌' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:05', activity: 'Bus Tour', location: 'Kawaguchiko Herb Hall', details: 'Sightseeing (5 mins)', cost: '', notes: '📸' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '13:00', activity: 'Bus Tour', location: 'Ubuya - Ubuyagasaki', details: 'Sightseeing (13 mins)', cost: '', notes: '📸' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '15:00', activity: 'Bus Tour', location: 'Oishi Park', details: 'Sightseeing (20 mins)', cost: '', notes: '📸' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '16:00', activity: 'Bus Tour', location: 'Lake Kawaguchiko Maple Corridor', details: 'Sightseeing (17 mins)', cost: '', notes: '📸' },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '18:00', activity: 'Bus Tour', location: 'Ogino Supermarket', details: 'Shopping (3 mins)', cost: '', notes: '🛒' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '08:00', activity: 'Train', location: 'Kawaguchiko → Shimoyoshida Station', details: 'Go to Chureito', cost: '¥310', notes: '' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '08:30', activity: 'Sightseeing', location: 'Chureito Pagoda', details: 'Arakurayama Sengen Park', cost: '', notes: '📸' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '12:00', activity: 'Meal', location: 'Honcho 2-chome', details: 'Lunch', cost: '', notes: '🍜' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '12:00', activity: 'Train', location: 'Gekkouji → Kawaguchiko Station', details: 'Return', cost: '', notes: '' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '16:30', activity: 'Rest', location: 'Kawaguchiko', details: 'Rest/Explore', cost: '', notes: '' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '18:35', activity: 'Train', location: 'Kawaguchiko → Tokyo Station', details: 'Return to Tokyo', cost: '¥310', notes: '🔴' },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '19:00', activity: 'Meal/Shop', location: 'Tokyo Station', details: 'Dinner/Shopping', cost: '', notes: '🍽️' },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'AM', activity: 'Sightseeing', location: 'Meiji Jingu', details: 'Shrine visit', cost: '', notes: '⛩️' },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'AM', activity: 'Sightseeing', location: 'Shibuya Crossing', details: 'Famous crossing', cost: '', notes: '📸' },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'PM', activity: 'Sightseeing', location: 'Godzilla Head', details: 'Shinjuku', cost: '', notes: '📸' },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'PM', activity: 'Explore', location: 'Shinjuku', details: 'Area exploration', cost: '', notes: '📸' },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'Evening', activity: 'Nightlife', location: 'Kabukicho', details: 'Entertainment district', cost: '', notes: '🌃' },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '11:00', activity: 'Hotel Check-out', location: 'Maru 5 Inn', details: 'Check-out', cost: '', notes: '🏨' },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '15:00', activity: 'Hotel Check-in', location: 'Meet Inn Narita', details: 'Check-in', cost: '', notes: '🏨' },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '15:00', activity: 'Shopping', location: 'AEON TOWN', details: 'Shopping', cost: '', notes: '🛒' },
    { date: '2025-11-23', day: 'Day 9', dayName: 'Sunday', time: '09:30', activity: 'Flight Departure', location: 'Narita Airport', details: 'Depart to Ho Chi Minh/KL', cost: '', notes: '✈️' },
    { date: '2025-11-23', day: 'Day 9', dayName: 'Sunday', time: '18:50', activity: 'Flight Arrival', location: 'Kuala Lumpur', details: 'Arrive home', cost: '', notes: '🔴 END' }
];

function getActivityClass(activity) {
    if (activity.includes('Meal') || activity.includes('Dinner') || activity.includes('Lunch') || activity.includes('Shop')) return 'activity-meal';
    if (activity.includes('Train') || activity.includes('Bus')) return 'activity-train';
    if (activity.includes('Hotel') || activity.includes('Check-in') || activity.includes('Check-out')) return 'activity-hotel';
    if (activity.includes('Sightseeing') || activity.includes('Visit') || activity.includes('Explore')) return 'activity-sight';
    return '';
}

function groupByDay(items) {
    const grouped = {};
    items.forEach(item => {
        if (!grouped[item.day]) {
            grouped[item.day] = [];
        }
        grouped[item.day].push(item);
    });
    return grouped;
}

function renderDays(itemsToShow = data) {
    const container = document.getElementById('daysContainer');
    container.innerHTML = '';

    const grouped = groupByDay(itemsToShow);
    const days = Object.keys(grouped).sort();

    days.forEach((day, idx) => {
        const items = grouped[day];
        const dayInfo = items[0];

        const daySection = document.createElement('div');
        daySection.className = 'day-section';

        const dayTitle = document.createElement('div');
        dayTitle.className = 'day-title';
        dayTitle.innerHTML = `
            <span>${day} - ${dayInfo.dayName} (${dayInfo.date})</span>
            <span class="toggle">▼</span>
        `;
        dayTitle.onclick = () => toggleDay(daySection);

        const dayContent = document.createElement('div');
        dayContent.className = 'day-content open';

        const table = document.createElement('table');

        // Table header
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        ['Time', 'Activity', 'Location', 'Details', 'Cost', 'Notes'].forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        // Table body
        const tbody = table.createTBody();
        items.forEach(item => {
            const tr = tbody.insertRow();
            tr.className = getActivityClass(item.activity);

            const cells = [item.time, item.activity, item.location, item.details, item.cost, item.notes];
            cells.forEach((cell, idx) => {
                const td = tr.insertCell();
                if (idx === 4 && cell) {
                    td.className = 'cost';
                }
                if (idx === 0) {
                    td.className = 'time';
                }
                td.textContent = cell;
            });
        });

        dayContent.appendChild(table);
        daySection.appendChild(dayTitle);
        daySection.appendChild(dayContent);
        container.appendChild(daySection);
    });
}

function toggleDay(daySection) {
    const content = daySection.querySelector('.day-content');
    const toggle = daySection.querySelector('.toggle');
    content.classList.toggle('open');
    toggle.textContent = content.classList.contains('open') ? '▼' : '▶';
}

function filterDays() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    if (!input) {
        renderDays();
        return;
    }

    const filtered = data.filter(item =>
        item.activity.toLowerCase().includes(input) ||
        item.location.toLowerCase().includes(input) ||
        item.details.toLowerCase().includes(input)
    );

    renderDays(filtered);
}

// Initial render
renderDays();
