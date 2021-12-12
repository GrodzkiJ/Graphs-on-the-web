function getValue(nazwa) {
    var selectedValue = document.getElementById(nazwa).value;
    return selectedValue;
}

function setTitle(nazwa, tytul) {
    document.getElementById(nazwa).innerHTML = tytul;
}

const CHART = document.getElementById("myChart");
let wykres = new Chart(CHART, {
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

dataset = [];
label = [];

function dodaj_x(x) {
    var dana = getValue(x);
    if (dana != " ") {
        label.push(dana);
    }
}

function dodaj_y(y) {
    var dana = getValue(y);
    if (dana != " ") {
        dataset.push(dana);
    }
}

function wyczysc_dane() {
    label = [];
    dataset = [];
}

function usun_ostatni_rekord() {
    label.pop();
    dataset.pop();
}

function draw(typ_wykresu, znaczniki, kolory, tytul_wykresu, tytul_dataset, title_x, title_y, coor_x, coor_y) {
    var typ = getValue(typ_wykresu);
    var znacznik = getValue(znaczniki);
    var kolor = getValue(kolory);
    var tytul = getValue(tytul_wykresu);
    var tytul_danych = getValue(tytul_dataset);
    var tytul_x = getValue(title_x);
    var tytul_y = getValue(title_y);
    dodaj_x(coor_x);
    dodaj_y(coor_y);
    if (kolor == "black") {
        kolor = 'rgb(0, 0, 0)';
    }
    else if (kolor == "red") {
        kolor = 'rgb(255, 0, 0)';
    }
    else if (kolor == "green") {
        kolor = 'rgb(0, 255, 0)';
    }
    else if (kolor == "blue") {
        kolor = 'rgb(0, 0, 255)';
    }
    const CHART = document.getElementById("myChart");
    var rysuj = true;
    var zmienna1 = true;
    var zmienna2 = true;
    for (var i = 0; i < dataset.length; i++) {
        if (dataset[i] == "") {
            zmienna1 = false;
        }
    }
    for (var i = 0; i < label.length; i++) {
        if (label[i] == "") {
            zmienna2 = false;
        }
    }
    if (zmienna1 == false || zmienna2 == false) {
        rysuj = false;
        alert("Usuń puste rekordy!");
    }
    if (rysuj == true) {
        wykres.destroy();
        if (typ == "line") {
            wykres = new Chart(CHART, {
                type: 'line',
                data: {
                    labels: label,
                    datasets: [
                        {
                            label: tytul_danych,
                            data: dataset,
                            fill: false,
                            borderColor: kolor,
                            tension: 0.1,
                            pointStyle: znacznik
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            title: {
                                display: true,
                                text: tytul,
                                font: {
                                    size: 24,
                                    family: "Arial"
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_x,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_y,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        }
                    }
                }
            });
        }
        else if (typ == "dot") {
            wykres = new Chart(CHART, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: tytul_danych,
                        data: [],
                        borderColor: kolor,
                        pointStyle: znacznik
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            display: true,
                            title: {
                                display: true,
                                text: tytul_x,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_y,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            title: {
                                display: true,
                                text: tytul,
                                font: {
                                    size: 24,
                                    family: "Arial"
                                }
                            }
                        }
                    }
                }
            })
        }
        else if (typ == "bar") {
            wykres = new Chart(CHART, {
                type: 'bar',
                data: {
                    labels: label,
                    datasets: [{
                        label: tytul_danych,
                        data: dataset,
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
                },
                options: {
                    plugins: {
                        legend: {
                            title: {
                                display: true,
                                text: tytul,
                                font: {
                                    size: 24,
                                    family: "Arial"
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_x,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_y,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        }
                    }
                }
            });
        }
        else if (typ == "circle") {
            wykres = new Chart(CHART, {
                type: 'pie',
                data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        label: tytul_danych,
                        data: [300, 50, 100],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            title: {
                                display: true,
                                text: tytul,
                                font: {
                                    size: 24,
                                    family: "Arial"
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_x,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: tytul_y,
                                font: {
                                    size: 18,
                                    family: "Arial"
                                }
                            }
                        }
                    }
                }
            });
        }
    }
}