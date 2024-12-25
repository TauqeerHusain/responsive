const startYear = 2017;
const endYear = 2024;

const dateSelect = document.getElementById('date-select');

for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            option.textContent = `${year} - ${String(month).padStart(2, '0')} - ${String(day).padStart(2, '0')}`;
            dateSelect.appendChild(option);
        }
    }
}

function openModal(month) {
    // Show modal and overlay
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-content').innerText = `You clicked on ${month} 2024.`;
}

function closeModal() {
    // Hide modal and overlay
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
document.getElementById('modal-overlay').addEventListener('click', closeModal);