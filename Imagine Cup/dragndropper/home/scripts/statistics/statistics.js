var gradesLabels = ["", "", "2", "3", "4", "5", "6"];
$(function() {
    $('#container').highcharts({
        chart: {
            type: 'column',
            margin: [50, 50, 100, 80],
            width: 600,
            height: 440
        },
        title: {
            text: 'Average grades'
        },
        credits: {
            enabled: false
        },
        yAxis: {
            min: 2,
            title: {
                text: 'Grades'
            },
            labels: {
                formatter: function() {
                    return gradesLabels[this.value];
                }
            }
        },
        xAxis: {
            categories: [
                'Anna',
                'Atanas',
                'Viktor',
                'Georgi',
                'Dimitar',
                'Ivan',
                'Kalina',
                'Maria',
                'Nikolai',
                'Petya'],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' +
                    Highcharts.numberFormat(this.y, 1)
            }
        },
        series: [{
            name: 'Population',
            data: [3, 4.5, 5.4, 5.8, 4.9, 6, 3.4, 4.2, 5.2, 6],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }],
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    });
    $('#container-stacked').highcharts({
        chart: {
            type: 'column',
            width: 600,
            height: 400
        },
        title: {
            text: 'Grades per exercise'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Anna',
                'Atanas',
                'Viktor',
                'Georgi',
                'Dimitar',
                'Ivan',
                'Kalina',
                'Maria',
                'Nikolai',
                'Petya'],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 2,
            title: {
                text: 'Grades'
            },
            labels: {
                formatter: function() {
                    return gradesLabels[this.value];
                }
            }
        },
        legend: {
            align: 'right',
            x: -100,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + (this.point.stackTotal / 3).toFixed(2);
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'Exercise 1',
            data: [3, 4, 5, 6, 4, 6, 3, 4, 5, 6]
        }, {
            name: 'Exercise 2',
            data: [2, 4, 5.2, 5.4, 6, 6, 3.6, 4.2, 5.3, 6]
        }, {
            name: 'Exercise 3',
            data: [4, 5.5, 6, 6, 4.7, 6, 3.6, 4.4, 5.3, 6]
        }],
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    });
});