let bookings = [];

function bookGas() {
  let booking = {
    id: bookings.length + 1,
    date: new Date().toLocaleString(),
    status: "Booked"
  };

  bookings.push(booking);
  alert("Gas booked successfully!");
}

function viewBookings() {
  let output = document.getElementById("output");
  output.innerHTML = "<h3>Your Bookings:</h3>";

  bookings.forEach(b => {
    output.innerHTML += `
      <p>Booking ID: ${b.id} | Date: ${b.date} | Status: ${b.status}</p>
    `;
  });
}
