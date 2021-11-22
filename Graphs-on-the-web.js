function getValue(nazwa) {
    var selectedValue = document.getElementById(nazwa).value;
    return selectedValue;
}

function setTitle(nazwa, tytul) {
    document.getElementById(nazwa).innerHTML = tytul;
}

function draw(typ_wykresu) {
    var typ = getValue(typ_wykresu);
    const CHART = document.getElementById("myChart");
    let lineChart;
    let dotChart;
    let pieChart;
    let barChart;
    if (typ == "line") {
        lineChart = new Chart(CHART, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
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
    else if (typ == "dot") {
        const CHART = document.getElementById("myChart");
        dotChart = new Chart(CHART, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Scatter Dataset',
                    data: [{
                        x: -10,
                        y: 0
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 10,
                        y: 5
                    }, {
                        x: 0.5,
                        y: 5.5
                    }],
                    backgroundColor: 'rgb(255, 99, 132)'
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        })
    }
    else if (typ == "bar") {
        const CHART = document.getElementById("myChart");
        barChart = new Chart(CHART, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
    else if (typ == "circle") {
        const CHART = document.getElementById("myChart");
        pieChart = new Chart(CHART, {
            type: 'pie',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            }
        });
    }
}