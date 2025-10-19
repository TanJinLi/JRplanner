// Day color scheme
const dayColors = {
    'Day 2': '#E91E63',  // Pink
    'Day 3': '#FF9800',  // Orange
    'Day 4': '#4CAF50',  // Green
    'Day 5': '#2196F3',  // Blue
    'Day 6': '#9C27B0',  // Purple
    'Day 7': '#F44336',  // Red
    'Day 8': '#00BCD4'   // Cyan
};

function getDayColor(day) {
    return dayColors[day] || '#667eea';
}

// Location coordinates mapping
const locationCoords = {
    'Narita Terminal 1': [35.7720, 140.3929],
    'Narita Airport': [35.7720, 140.3929],
    'Minowa Station': [35.7370, 139.7948],
    'Maru 5 Inn': [35.7370, 139.7948],
    'Asakusa Station': [35.7126, 139.7966],
    'Senso-ji area': [35.7126, 139.7966],
    'Senso-ji Temple': [35.7148, 139.7967],
    'Oshiage Station': [35.7101, 139.8107],
    'Tokyo Skytree': [35.7101, 139.8107],
    'Akihabara Station': [35.6984, 139.7731],
    'Akihabara → Kawaguchiko': [35.6984, 139.7731],
    'Ueno Station': [35.7138, 139.7774],
    'Ueno Park': [35.7153, 139.7742],
    'Tsujiki Market': [35.6654, 139.7707],
    'Imperial Palace': [35.6852, 139.7528],
    'Tokyo Tower': [35.6586, 139.7454],
    'Roppongi Hills': [35.6606, 139.7294],
    'Tokyo Ramen Street': [35.6812, 139.7671],
    'Tokyo Station': [35.6812, 139.7671],
    'Nikko': [36.7200, 139.6982],
    'Kawaguchiko Station': [35.5033, 138.7639],
    'Fuji Scenic House 73': [35.5033, 138.7639],
    'LAWSON Kawaguchiko': [35.5007, 138.7641],
    'Kawaguchiko': [35.5033, 138.7639],
    'Oike Park': [35.5009, 138.7541],
    'Kawaguchiko Herb Hall': [35.5021, 138.7498],
    'Ubuya - Ubuyagasaki': [35.5185, 138.7423],
    'Oishi Park': [35.5207, 138.7693],
    'Lake Kawaguchiko Maple Corridor': [35.5080, 138.7590],
    'Ogino Supermarket': [35.5033, 138.7639],
    'Kawaguchiko → Shimoyoshida Station': [35.5033, 138.7639],
    'Chureito Pagoda': [35.5016, 138.7933],
    'Honcho 2-chome': [35.4928, 138.7790],
    'Gekkouji → Kawaguchiko Station': [35.5033, 138.7639],
    'Kawaguchiko → Tokyo Station': [35.5033, 138.7639],
    'Meiji Jingu': [35.6764, 139.6993],
    'Shibuya Crossing': [35.6595, 139.7004],
    'Godzilla Head': [35.6938, 139.7006],
    'Shinjuku': [35.6938, 139.7006],
    'Kabukicho': [35.6947, 139.7028],
    'Meet Inn Narita': [35.7787, 140.3824],
    'AEON TOWN': [35.7787, 140.3824]
};

const data = [
    { date: '2025-11-15', day: 'Day 1', dayName: 'Saturday', time: '19:50', activity: 'Flight Departure', location: 'Ho Chi Minh/Tokyo', details: 'Depart', cost: '', notes: '✈️', lat: null, lng: null },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '07:45', activity: 'Flight Arrival', location: 'Narita Terminal 1', details: 'Arrive Tokyo', cost: '', notes: '🟢 START', lat: 35.7720, lng: 140.3929 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '09:47', activity: 'Train', location: 'Narita Terminal 1 → Minowa Station', details: 'Travel to hotel', cost: '¥1,240', notes: '', lat: 35.7370, lng: 139.7948 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '12:00', activity: 'Hotel Check-in', location: 'Maru 5 Inn', details: 'Check-in', cost: '', notes: '🏨', lat: 35.7370, lng: 139.7948 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '12:46', activity: 'Train', location: 'Minowa → Asakusa Station', details: 'Go to Senso-ji', cost: '¥180', notes: '', lat: 35.7126, lng: 139.7966 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '13:30', activity: 'Meal', location: 'Senso-ji area', details: 'Lunch', cost: '', notes: '🍽️', lat: 35.7126, lng: 139.7966 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '14:30', activity: 'Sightseeing', location: 'Senso-ji Temple', details: 'Visit Kaminari-mon, Nakamise Street', cost: '', notes: '📸', lat: 35.7148, lng: 139.7967 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:08', activity: 'Train', location: 'Asakusa → Oshiage Station', details: 'Go to Tokyo Skytree', cost: '¥180', notes: '', lat: 35.7101, lng: 139.8107 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:36', activity: 'Sightseeing', location: 'Tokyo Skytree', details: 'Visit', cost: '', notes: '📸', lat: 35.7101, lng: 139.8107 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '18:36', activity: 'Train', location: 'Oshiage → Akihabara Station', details: 'Go to Akihabara', cost: '¥290', notes: '', lat: 35.6984, lng: 139.7731 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '19:32', activity: 'Train', location: 'Akihabara → Ueno Station', details: 'Go to Ueno', cost: '¥180', notes: '', lat: 35.7138, lng: 139.7774 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '20:00', activity: 'Meal', location: 'Ueno Park', details: 'Dinner', cost: '', notes: '🍽️', lat: 35.7153, lng: 139.7742 },
    { date: '2025-11-16', day: 'Day 2', dayName: 'Sunday', time: '21:00', activity: 'Hotel Return', location: 'Maru 5 Inn', details: 'Back to hotel', cost: '', notes: '🏨', lat: 35.7370, lng: 139.7948 },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Tsujiki Market', details: 'Explore market', cost: '', notes: '📸', lat: 35.6654, lng: 139.7707 },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Imperial Palace', details: 'Visit palace', cost: '', notes: '📸', lat: 35.6852, lng: 139.7528 },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'AM', activity: 'Sightseeing', location: 'Tokyo Tower', details: 'Visit tower', cost: '', notes: '📸', lat: 35.6586, lng: 139.7454 },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'PM', activity: 'Sightseeing', location: 'Roppongi Hills', details: 'Explore', cost: '', notes: '📸', lat: 35.6606, lng: 139.7294 },
    { date: '2025-11-17', day: 'Day 3', dayName: 'Monday', time: 'Evening', activity: 'Meal', location: 'Tokyo Ramen Street', details: 'Dinner', cost: '', notes: '🍜', lat: 35.6812, lng: 139.7671 },
    { date: '2025-11-18', day: 'Day 4', dayName: 'Tuesday', time: 'All Day', activity: 'Day Trip', location: 'Nikko', details: 'Full day trip', cost: '', notes: '⛩️', lat: 36.7200, lng: 139.6982 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '07:20', activity: 'Shuttle Bus', location: 'Akihabara → Kawaguchiko', details: 'VIP Liner to Mt. Fuji', cost: '', notes: '🟢', lat: 35.6984, lng: 139.7731 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '09:10', activity: 'Bus Arrival', location: 'Kawaguchiko Station', details: 'Arrive Mt. Fuji area', cost: '', notes: '', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '09:30', activity: 'Hotel Check-in', location: 'Fuji Scenic House 73', details: 'Check-in', cost: '', notes: '🏨', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '11:00', activity: 'Activity', location: 'LAWSON Kawaguchiko', details: 'Photo stop', cost: '', notes: '📸', lat: 35.5007, lng: 138.7641 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:00', activity: 'Meal', location: 'Kawaguchiko', details: 'Lunch', cost: '', notes: '🍽️', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:00', activity: 'Bus Tour', location: 'Oike Park', details: 'Sightseeing (5 mins)', cost: '', notes: '🚌', lat: 35.5009, lng: 138.7541 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '12:05', activity: 'Bus Tour', location: 'Kawaguchiko Herb Hall', details: 'Sightseeing (5 mins)', cost: '', notes: '📸', lat: 35.5021, lng: 138.7498 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '13:00', activity: 'Bus Tour', location: 'Ubuya - Ubuyagasaki', details: 'Sightseeing (13 mins)', cost: '', notes: '📸', lat: 35.5185, lng: 138.7423 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '15:00', activity: 'Bus Tour', location: 'Oishi Park', details: 'Sightseeing (20 mins)', cost: '', notes: '📸', lat: 35.5207, lng: 138.7693 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '16:00', activity: 'Bus Tour', location: 'Lake Kawaguchiko Maple Corridor', details: 'Sightseeing (17 mins)', cost: '', notes: '📸', lat: 35.5080, lng: 138.7590 },
    { date: '2025-11-19', day: 'Day 5', dayName: 'Wednesday', time: '18:00', activity: 'Bus Tour', location: 'Ogino Supermarket', details: 'Shopping (3 mins)', cost: '', notes: '🛒', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '08:00', activity: 'Train', location: 'Kawaguchiko → Shimoyoshida Station', details: 'Go to Chureito', cost: '¥310', notes: '', lat: 35.5016, lng: 138.7933 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '08:30', activity: 'Sightseeing', location: 'Chureito Pagoda', details: 'Arakurayama Sengen Park', cost: '', notes: '📸', lat: 35.5016, lng: 138.7933 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '12:00', activity: 'Meal', location: 'Honcho 2-chome', details: 'Lunch', cost: '', notes: '🍜', lat: 35.4928, lng: 138.7790 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '12:00', activity: 'Train', location: 'Gekkouji → Kawaguchiko Station', details: 'Return', cost: '', notes: '', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '16:30', activity: 'Rest', location: 'Kawaguchiko', details: 'Rest/Explore', cost: '', notes: '', lat: 35.5033, lng: 138.7639 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '18:35', activity: 'Train', location: 'Kawaguchiko → Tokyo Station', details: 'Return to Tokyo', cost: '¥310', notes: '🔴', lat: 35.6812, lng: 139.7671 },
    { date: '2025-11-20', day: 'Day 6', dayName: 'Thursday', time: '19:00', activity: 'Meal/Shop', location: 'Tokyo Station', details: 'Dinner/Shopping', cost: '', notes: '🍽️', lat: 35.6812, lng: 139.7671 },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'AM', activity: 'Sightseeing', location: 'Meiji Jingu', details: 'Shrine visit', cost: '', notes: '⛩️', lat: 35.6764, lng: 139.6993 },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'AM', activity: 'Sightseeing', location: 'Shibuya Crossing', details: 'Famous crossing', cost: '', notes: '📸', lat: 35.6595, lng: 139.7004 },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'PM', activity: 'Sightseeing', location: 'Godzilla Head', details: 'Shinjuku', cost: '', notes: '📸', lat: 35.6938, lng: 139.7006 },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'PM', activity: 'Explore', location: 'Shinjuku', details: 'Area exploration', cost: '', notes: '📸', lat: 35.6938, lng: 139.7006 },
    { date: '2025-11-21', day: 'Day 7', dayName: 'Friday', time: 'Evening', activity: 'Nightlife', location: 'Kabukicho', details: 'Entertainment district', cost: '', notes: '🌃', lat: 35.6947, lng: 139.7028 },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '11:00', activity: 'Hotel Check-out', location: 'Maru 5 Inn', details: 'Check-out', cost: '', notes: '🏨', lat: 35.7370, lng: 139.7948 },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '15:00', activity: 'Hotel Check-in', location: 'Meet Inn Narita', details: 'Check-in', cost: '', notes: '🏨', lat: 35.7787, lng: 140.3824 },
    { date: '2025-11-22', day: 'Day 8', dayName: 'Saturday', time: '15:00', activity: 'Shopping', location: 'AEON TOWN', details: 'Shopping', cost: '', notes: '🛒', lat: 35.7787, lng: 140.3824 },
    { date: '2025-11-23', day: 'Day 9', dayName: 'Sunday', time: '09:30', activity: 'Flight Departure', location: 'Narita Airport', details: 'Depart to Ho Chi Minh/KL', cost: '', notes: '✈️', lat: 35.7720, lng: 140.3929 },
    { date: '2025-11-23', day: 'Day 9', dayName: 'Sunday', time: '18:50', activity: 'Flight Arrival', location: 'Kuala Lumpur', details: 'Arrive home', cost: '', notes: '🔴 END', lat: null, lng: null }
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

        // Add colored border matching the map route color
        const dayColor = getDayColor(day);
        if (dayColor) {
            daySection.style.borderColor = dayColor;
            daySection.style.borderWidth = '3px';
        }

        const dayTitle = document.createElement('div');
        dayTitle.className = 'day-title';

        // Use day color for title background
        if (dayColor) {
            dayTitle.style.background = dayColor;
        }

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
    const isOpen = content.classList.contains('open');

    content.classList.toggle('open');

    if (isOpen) {
        // Closing
        toggle.style.transform = 'rotate(-90deg)';
        toggle.textContent = '▶';
    } else {
        // Opening
        toggle.style.transform = 'rotate(0deg)';
        toggle.textContent = '▼';
    }
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

// Map initialization
let map;
let markers = [];
let routeLines = [];

function initMap() {
    // Create map centered on Tokyo/Mt. Fuji area
    map = L.map('map').setView([35.6, 139.0], 8);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    addMarkersAndRoutes();
}

function addMarkersAndRoutes() {
    // Get items with valid coordinates
    const itemsWithCoords = data.filter(item => item.lat && item.lng);

    // Group items by day
    const groupedByDay = {};
    itemsWithCoords.forEach(item => {
        if (!groupedByDay[item.day]) {
            groupedByDay[item.day] = [];
        }
        groupedByDay[item.day].push(item);
    });

    // Draw route polylines for each day
    Object.keys(groupedByDay).sort().forEach(day => {
        const dayItems = groupedByDay[day];
        const routeCoords = dayItems.map(item => [item.lat, item.lng]);

        if (routeCoords.length > 1) {
            const routeLine = L.polyline(routeCoords, {
                color: getDayColor(day),
                weight: 4,
                opacity: 0.8,
                smoothFactor: 1
            }).addTo(map);

            // Add popup to route showing day
            routeLine.bindPopup(`<strong>${day}</strong>`);
            routeLines.push(routeLine);
        }
    });

    // Group significant activities by location to handle overlapping markers
    const locationGroups = new Map(); // "lat,lng" -> array of items

    itemsWithCoords.forEach(item => {
        const isSignificant = item.activity.includes('Sightseeing') ||
                             item.activity.includes('Hotel') ||
                             item.activity.includes('Visit') ||
                             item.notes.includes('🟢') ||
                             item.notes.includes('🔴') ||
                             item.notes.includes('📸');

        if (isSignificant) {
            const locationKey = `${item.lat},${item.lng}`;
            if (!locationGroups.has(locationKey)) {
                locationGroups.set(locationKey, []);
            }
            locationGroups.get(locationKey).push(item);
        }
    });

    // Create markers for each unique location
    locationGroups.forEach((items, locationKey) => {
        const [lat, lng] = locationKey.split(',').map(Number);

        // Get all unique days at this location
        const days = [...new Set(items.map(item => item.day))];
        const colors = days.map(day => getDayColor(day));

        // Create multi-colored marker if multiple days
        let markerHtml;
        if (days.length === 1) {
            // Single day - solid color circle
            markerHtml = `<div style="background-color: ${colors[0]}; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4);"></div>`;
        } else {
            // Multiple days - split color circle
            const gradientStops = colors.map((color, idx) => {
                const startPercent = (idx / colors.length) * 100;
                const endPercent = ((idx + 1) / colors.length) * 100;
                return `${color} ${startPercent}%, ${color} ${endPercent}%`;
            }).join(', ');

            markerHtml = `<div style="background: conic-gradient(${gradientStops}); width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4);"></div>`;
        }

        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: markerHtml,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);

        // Create popup content showing all days
        let popupContent = '<div class="map-popup">';

        if (days.length > 1) {
            popupContent += `<div style="font-weight: bold; margin-bottom: 5px;">Multiple Days: ${days.join(', ')}</div>`;
        }

        items.forEach((item, idx) => {
            const color = getDayColor(item.day);
            if (idx > 0) popupContent += '<hr style="margin: 8px 0; border: none; border-top: 1px solid #ddd;">';

            popupContent += `
                <div style="color: ${color}; font-weight: bold; margin-bottom: 3px;">${item.day}</div>
                <strong>${item.location}</strong><br/>
                <em>${item.activity}</em><br/>
                ${item.details ? `${item.details}<br/>` : ''}
                ${item.time ? `⏰ ${item.time}<br/>` : ''}
                ${item.cost ? `<span style="color: #d32f2f; font-weight: 600;">${item.cost}</span><br/>` : ''}
                ${item.notes}
            `;
        });

        popupContent += '</div>';

        marker.bindPopup(popupContent);
        markers.push(marker);
    });
}

// Initialize map when page loads
if (typeof L !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
}

// Japan live time clock
function updateJapanTime() {
    const now = new Date();

    // Get Japanese weekday
    const japaneseWeekday = new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        weekday: 'long'
    }).format(now);

    // Format options for English date/time
    const options = {
        timeZone: 'Asia/Tokyo',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const japanTime = new Intl.DateTimeFormat('en-US', options).format(now);

    // Split to insert Japanese weekday before English weekday
    const parts = japanTime.split(',');
    const englishWeekday = parts[0]; // e.g., "Saturday"
    const restOfDate = parts.slice(1).join(','); // everything after first comma

    const clockElement = document.getElementById('japan-time');
    if (clockElement) {
        clockElement.textContent = `Japan Time: (${japaneseWeekday})/${englishWeekday}${restOfDate} JST`;
    }
}

// Update clock immediately and then every second
updateJapanTime();
setInterval(updateJapanTime, 1000);

// Trip progress calculator
function updateTripProgress() {
    const tripStart = new Date('2025-11-15');
    const tripEnd = new Date('2025-11-23');
    const today = new Date();

    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const timelineDots = document.querySelectorAll('.timeline-dot');

    if (today < tripStart) {
        // Before trip
        const daysUntil = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));
        progressFill.style.width = '0%';
        progressText.textContent = `✈️ Trip starts in ${daysUntil} days!`;
    } else if (today > tripEnd) {
        // After trip
        progressFill.style.width = '100%';
        progressText.textContent = '🎌 Trip completed! Thank you for the memories!';
        timelineDots.forEach(dot => dot.classList.add('completed'));
    } else {
        // During trip
        const totalDays = (tripEnd - tripStart) / (1000 * 60 * 60 * 24);
        const daysPassed = (today - tripStart) / (1000 * 60 * 60 * 24);
        const currentDay = Math.floor(daysPassed) + 1;
        const progress = (daysPassed / totalDays) * 100;

        progressFill.style.width = `${progress}%`;
        progressText.textContent = `🗾 Day ${currentDay} of 9 - Enjoy your adventure!`;

        // Update timeline dots
        timelineDots.forEach((dot, index) => {
            if (index + 1 < currentDay) {
                dot.classList.add('completed');
            } else if (index + 1 === currentDay) {
                dot.classList.add('active');
            }
        });
    }
}

// Update progress on load
updateTripProgress();
