<script>
  import { onMount } from "svelte";
  export let dataColors;
  import { browser } from "$app/environment";
  function getChartColorsArray(colors) {
    if (browser) {
      return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
          var color = getComputedStyle(
            document.documentElement
          ).getPropertyValue(newValue);
          if (color.indexOf("#") !== -1) color = color.replace(" ", "");
          if (color) return color;
          else return newValue;
        } else {
          var val = value.split(",");
          if (val.length === 2) {
            var rgbaColor = getComputedStyle(
              document.documentElement
            ).getPropertyValue(val[0]);
            rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
            return rgbaColor;
          } else {
            return newValue;
          }
        }
      });
    }
  }

  onMount(() => {
    const linechartcustomerColors = getChartColorsArray(dataColors);

    var options = {
      chart: {
        height: 374,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Number of Games",
          type: "bar",
          data: [4, 6, 7, 1, 8, 4, 3, 5, 9, 4, 5, 6],
        },
        {
          name: "Recent Placing",
          type: "area",
          data: [1, 2, 3, 2, 2, 1, 3, 4, 5, 2, 3, 1],
        },
      ],
      stroke: {
        curve: "straight",
        dashArray: [0, 3, 0],
        width: [0, 1, 0],
      },
      fill: {
        opacity: [1, 0.1, 1],
      },
      markers: {
        size: [0, 4, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 15,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          barHeight: "70%",
        },
      },
      colors: linechartcustomerColors,
      tooltip: {
        shared: true,
        y: [
          {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            },
          },
          {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + "th";
              }
              return y;
            },
          },
          {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            },
          },
        ],
      },
    };
    const chart = new ApexCharts(
      document.querySelector("#yearlystatschart"),
      options
    );
    chart.render();
  });
</script>

<div id="yearlystatschart" class="apex-charts" dir="ltr" />
