// Plotly

var trace1 = {
    x: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020'],
    y: [2, 1, 4, 3, 2, 4, 1, 3],
    name: 'A321',
    type: 'bar'
};

var trace2 = {
    x: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020'],
    y: [2, 2.5, 2, 1, 3, 4, 2.5, 1],
    name: 'B737',
    type: 'bar'
};

var trace3 = {
    x: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020'],
    y: [2, 1, 4, 3, 4, 2, 1, 3.5],
    name: 'B777',
    type: 'bar'
};

var trace4 = {
    x: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020'],
    y: [2, 2.5, 2, 1, 3, 1.5, 3, 4],
    name: 'RRJ',
    type: 'bar'
};

var data = [trace1, trace2, trace3, trace4];

var layout = { barmode: 'stack' };

Plotly.newPlot('myDiv', data, layout);

let data1 = [
    {
        key: "Cumulative Return",
        values: [
            {
                "label": "02.11.2020",
                "value": 8
            },
            {
                "label": "03.11.2020",
                "value": 7
            },
            {
                "label": "04.11.2020",
                "value": 12
            },
            {
                "label": "05.11.2020",
                "value": 8
            },
            {
                "label": "06.11.2020",
                "value": 12
            },
            {
                "label": "07.11.2020",
                "value": 11.5
            },
            {
                "label": "08.11.2020",
                "value": 7.5
            },
            {
                "label": "09.11.2020",
                "value": 11.5
            }
        ]
    }
]


//   Nvd3

nv.addGraph(function () {
    var chart = nv.models.discreteBarChart()
        .x(function (d) { return d.label })
        .y(function (d) { return d.value })
        .staggerLabels(true)
        .tooltips(false)
        .showValues(true)

    d3.select('#chart svg')
        .datum(data1)
        .transition().duration(500)
        .call(chart)
        ;

    nv.utils.windowResize(chart.update);

    return chart;
});

//   Highcharts

// Столбчатый график

Highcharts.chart('container1', {
    title: {
        text: 'Столбчатый график'
    },
    xAxis: {
        categories: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020']
    },
    labels: {
        items: [{
            html: '',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'A321',
        data: [2, 1, 4, 3, 2, 4, 1, 3]
    }, {
        type: 'column',
        name: 'B737',
        data: [2, 2.5, 2, 1, 3, 4, 2.5, 1]
    }, {
        type: 'column',
        name: 'B777',
        data: [2, 1, 4, 3, 4, 2, 1, 3.5]
    }, {
        type: 'column',
        name: 'RRJ',
        data: [2, 2.5, 2, 1, 3, 1.5, 3, 4],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }]
});


Highcharts.chart('container2', {
    title: {
        text: 'Линейный график'
    },
    xAxis: {
        categories: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020']
    },
    labels: {
        items: [{
            html: '',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'spline',
        name: 'A321',
        data: [2, 1, 4, 3, 2, 4, 1, 3]
    }, {
        type: 'spline',
        name: 'B737',
        data: [2, 2.5, 2, 1, 3, 4, 2.5, 1]
    }, {
        type: 'spline',
        name: 'B777',
        data: [2, 1, 4, 3, 4, 2, 1, 3.5]
    }, {
        type: 'spline',
        name: 'RRJ',
        data: [2, 2.5, 2, 1, 3, 1.5, 3, 4],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }]
});


// Аналитическая диаграмма

Highcharts.chart('container3', {
    title: {
        text: 'Аналитическая диаграмма'
    },
    xAxis: {
        categories: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020']
    },
    labels: {
        items: [{
            html: '',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'pie',
        name: '02.11.2020',
        data: [{
            name: 'A321',
            y: 2,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 2,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 2,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 2,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [20, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '03.11.2020',
        data: [{
            name: 'A321',
            y: 1,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 2.5,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 1,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 2.5,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [130, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '04.11.2020',
        data: [{
            name: 'A321',
            y: 4,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 2,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 4,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 2,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [240, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '05.11.2020',
        data: [{
            name: 'A321',
            y: 3,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 1,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 3,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 1,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [350, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '06.11.2020',
        data: [{
            name: 'A321',
            y: 2,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 3,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 2,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 3,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [20, 200],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '07.11.2020',
        data: [{
            name: 'A321',
            y: 4,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 4,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 2,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 1.5,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [130, 200],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '08.11.2020',
        data: [{
            name: 'A321',
            y: 1,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 2.5,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 1,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 3,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [240, 200],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    },
    {
        type: 'pie',
        name: '09.11.2020',
        data: [{
            name: 'A321',
            y: 3,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 1,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 3.5,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 4,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [350, 200],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});

// Комбинированный график

Highcharts.chart('container', {
    title: {
        text: 'Комбинированный график'
    },
    xAxis: {
        categories: ['02.11.2020', '03.11.2020', '04.11.2020', '05.11.2020', '06.11.2020', '07.11.2020', '08.11.2020', '09.11.2020']
    },
    labels: {
        items: [{
            html: '',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'A321',
        data: [2, 1, 4, 3, 2, 4, 1, 3]
    }, {
        type: 'column',
        name: 'B737',
        data: [2, 2.5, 2, 1, 3, 4, 2.5, 1]
    }, {
        type: 'column',
        name: 'B777',
        data: [2, 1, 4, 3, 4, 2, 1, 3.5]
    }, {
        type: 'spline',
        name: 'RRJ',
        data: [2, 2.5, 2, 1, 3, 1.5, 3, 4],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Всего за период',
        data: [{
            name: 'A321',
            y: 25,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'B737',
            y: 29,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'B777',
            y: 27,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }, {
            name: 'RRJ',
            y: 21,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }],
        center: [70, 25],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});
