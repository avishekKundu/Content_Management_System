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
            yAxes: [{ ticks: { min: 0, max: 40, fontColor:'white' } }],
            xAxes: [{ ticks: { fontColor:'white' } }],
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
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        },
        maintainAspectRatio: false,
        responsive: true,
        height: 320,
    }
});

const itemList = ['Iphone', 'Redmi', 'Samsung', 'Realme', 'Motorola', 'ASUS'];
const priceList = [120000, 25000, 55000, 18000, 12000, 78000];

const data = [{
    x: itemList,
    y: priceList,
    type: 'bar',
    orientation: 'v',
    marker: { color: "rgba(255, 0, 0, 0.6)" }
}];

const title = { title: 'Mobile Prices' };
Plotly.newPlot('myEmailSubGraph', data, title);