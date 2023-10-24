const xValues = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const yValues = [7, 12, 8, 14, 25, 15, 36];

new Chart("mySalesChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(255,255,255,1)",
            borderColor: "rgba(255,255,255,1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 0, max: 40, fontColor: 'white', fontSize: 18 } }],
            xAxes: [{ ticks: { fontColor: 'white', fontSize: 18 } }],
        },
        maintainAspectRatio: false,
        responsive: true,
    }
});

const aValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const bValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myTaskChart", {
    type: "line",
    data: {
        labels: aValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(255,255,255,1)",
            borderColor: "rgba(255,255,255,1)",
            data: bValues,
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16, fontColor: 'white', fontSize: 18 } }],
            xAxes: [{ ticks: { fontColor: 'white', fontSize: 18 } }],
        },
        maintainAspectRatio: false,
        responsive: true,
        height: 170,
    }
});

const itemList = ['J', 'F', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const priceList = [400, 300, 200, 700, 420, 350, 240, 330, 455, 520, 750];

new Chart("myEmailSubGraph", {
    type: "bar",
    data: {
        labels: itemList,
        datasets: [{
            backgroundColor: "rgba(255,255,255,1)",
            data: priceList
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'white',
                    min: 0,
                    max: 800,
                    fontSize: 18
                }
            }],
            xAxes: [{ ticks: { fontColor: 'white', } }],
        },
    }
});