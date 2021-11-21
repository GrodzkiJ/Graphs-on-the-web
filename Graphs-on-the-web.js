function getValue(nazwa) {
    var selectedValue = document.getElementById(nazwa).value;
    return selectedValue;
}

function setTitle(nazwa, tytul) {
    document.getElementById(nazwa).innerHTML = tytul;
}

function lineChart() {
    const CHART = document.getElementById("myChart");
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August"]
    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40, 50],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        }
    });
}