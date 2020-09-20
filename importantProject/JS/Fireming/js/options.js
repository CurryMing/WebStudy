(function () {
    let dt = new Date()
    let year = dt.getFullYear()
    let month = dt.getMonth() + 1
    let date = dt.getDate()
    let calendar = echarts.init(document.querySelector('.calendar'))

    let dataList = [
        {
            "date": '2020-09-01',
            "total": 1
        },
        {
            "date": "2020-09-02",
            "total": 2
        },
        {
            "date": "2020-09-03",
            "total": 3
        },
        {
            "date": "2020-09-04",
            "total": 4
        },
        {
            "date": "2020-09-05",
            "total": 5
        },
        {
            "date": "2020-09-06",
            "total": 6
        },
        {
            "date": "2020-09-07",
            "total": 7
        },
        {
            "date": "2020-09-08",
            "total": 8
        },
        {
            "date": "2020-09-09",
            "total": 9
        },
        {
            "date": "2020-09-10",
            "total": 10
        },
        {
            "date": "2020-09-11",
            "total": 11
        },
        {
            "date": "2020-09-12",
            "total": 12
        },
        {
            "date": "2020-09-13",
            "total": 13
        }, {
            "date": "2020-09-14",
            "total": 14
        },
        {
            "date": "2020-09-15",
            "total": 15
        },
        {
            "date": "2020-09-16",
            "total": 16
        }, {

            "date": "2020-09-17",
            "total": 17
        },
        {
            "date": "2020-09-18",
            "total": 18
        },
        {
            "date": "2020-09-19",
            "total": 19
        },
        {
            "date": "2020-09-20",
            "total": 20
        },
        {
            "date": "2020-09-21",
            "total": 21
        },
        {
            "date": "2020-09-22",
            "total": 22
        },
        {
            "date": "2020-09-23",
            "total": 23
        },
        {
            "date": "2020-09-24",
            "total": 24
        },
        {
            "date": "2020-09-25",
            "total": 25
        },
        {
            "date": "2020-09-26",
            "total": 26
        },
        {
            "date": "2020-09-27",
            "total": 27
        },
        {
            "date": "2020-09-28",
            "total": 28
        },
        {
            "date": "2020-09-29",
            "total": 29
        },
        {
            "date": "2020-09-30",
            "total": 30
        },
        {
            "date": "2020-09-31",
            "total": 31
        }
    ]
    // ${year}-${month}-${date}
    let thisDate = `2020-09-03`; //当前日期
    let thisMonth = `2020-09`; //当前月份
    let maxArr = [];
    let bgColor = ['#FFDEAD', '#FFDEAD', '#FFDEAD', '#FFDEAD']; //填充色
    let chartData = [];
    dataList.forEach(item => {
        maxArr.push(item.total);
        chartData.push({
            value: [item.date, item.total],
            //当前日期标注边框为特定颜色
            itemStyle: item.date === thisDate ? { borderColor: '#4682B4' } : {},
            symbol: 'rect' // 核心1，长方形来填充
        })
    })
    //visualMap 填充色对比 最大值
    let maxNum = maxArr.sort((a, b) => b - a)[0];
    option = {
        backgroundColor: '#fff',
        calendar: {
            left: 'center',
            top: '20%',
            orient: 'vertical',
            cellSize: 70, //大小
            range: thisMonth, //月份
            monthLabel: {
                show: true, //隐藏左侧文字
                margin: 20,
                fontSize: 25,
                color: '#ccc',
            },
            dayLabel: {
                firstDay: 1, //开始时间 1号开始
                nameMap: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
                fontWeight: 700,
                fontSize: 15,
                margin: 15,

            },
            yearLabel: {
                show: true, //隐藏title
                margin: 80,
                color: '#000',
                fontSize: 30,
            },
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: maxNum, //色值对比 最大值
            show: false, //隐藏工具栏
            inRange: {
                color: bgColor, //填充色
            },
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize(params) { //核心2 
                if (params[0] === thisDate) {
                    return 60; //当前日期高亮 宽度高度设置成和单元格宽度高度一样
                } else {
                    return 1;
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 25,
                        color: '#00CED1',
                    },
                },
            },
            data: chartData,
        },
        {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: chartData,
        },
        ],
    };

    calendar.setOption(option)
    window.addEventListener("resize", function () {
        calendar.resize();
    });
})();