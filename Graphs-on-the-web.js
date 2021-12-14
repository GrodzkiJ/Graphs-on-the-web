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

dataset_punktowy = [];
dataset = [];
label = [];
temp_dataset_punktowy = [];
temp_dataset = [];
temp_label = [];

function zmiana_zakresu(dol, gora) {
    var zakres_dolny = getValue(dol);
    var zakres_gorny = getValue(gora);
    if (zakres_dolny == "" || zakres_gorny == "") {
        if (zakres_gorny == "" && zakres_dolny != "") {
            for (i = 0; i < label.length; i++) {
                if (label[i] < zakres_dolny) {
                    label.splice(i, 1);
                    dataset.splice(i, 1);
                    dataset_punktowy.splice(i, 1);
                }
            }
        }
        if (zakres_gorny != "" && zakres_dolny == "") {
            for (i = 0; i < label.length; i++) {
                if (label[i] > zakres_gorny) {
                    label.splice(i, 1);
                    dataset.splice(i, 1);
                    dataset_punktowy.splice(i, 1);
                }
            }
        }
    }
    else {
        for (i = 0; i < label.length; i++) {
            if (label[i] < zakres_dolny || label[i] > zakres_gorny) {
                label.splice(i, 1);
                dataset.splice(i, 1);
                dataset_punktowy.splice(i, 1);
            }
        }
    }
}

function powrot_zakresu() {
    dataset_punktowy = [...temp_dataset_punktowy];
    dataset = [...temp_dataset];
    label = [...temp_label];
}

function dodaj_punkt(x, y) {
    var dana_x = getValue(x);
    var dana_y = getValue(y);
    if (dana_x != "" && dana_y != "") {
        dataset_punktowy.push({
            x: dana_x,
            y: dana_y
        });
        temp_dataset_punktowy = [...dataset_punktowy];
    }
    if (dana_y != "") {
        dataset.push(dana_y);
        temp_dataset = [...dataset];
    }
    if (dana_x != "") {
        label.push(dana_x);
        temp_label = [...label];
    }
    if (sprawdz_powtorzenia() == true) {
        usun_ostatni_rekord();
        alert("Powtórka wartości. Wprowadź nową!");
    }
}

function wyczysc_dane() {
    label = [];
    dataset = [];
    dataset_punktowy = [];
}

function usun_ostatni_rekord() {
    label.pop();
    dataset.pop();
    dataset_punktowy.pop();
}

function sprawdz_powtorzenia() {
    uniqeLabel = [];
    var powtorka = false;
    uniqeLabel = [... new Set(label)];
    if (uniqeLabel.length != label.length) {
        powtorka = true;
    }
    console.log(label);
    console.log(uniqeLabel);
    return powtorka;
}

function draw(typ_wykresu, znaczniki, kolory, tytul_wykresu, tytul_dataset, title_x, title_y) {
    var typ = getValue(typ_wykresu);
    var znacznik = getValue(znaczniki);
    var kolor = getValue(kolory);
    var tytul = getValue(tytul_wykresu);
    var tytul_danych = getValue(tytul_dataset);
    var tytul_x = getValue(title_x);
    var tytul_y = getValue(title_y);
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
                        data: dataset_punktowy,
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
        /**else if (typ == "circle") {
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
        }**/
    }
}