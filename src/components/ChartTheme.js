const ChartTheme = {
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#90A4AE",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      axisLabel: {
        fontSize: 28,
        fontWeight: "bold",
        padding: 45,
        fontFamily:
          "'Amatic SC', cursive, 'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 9,
        letterSpacing: "normal",
        padding: 18,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
        verticalAnchor: "middle",
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
  bar: {
    style: {
      data: {
        fill: "#4a90e2",
        padding: 0,
        strokeWidth: 2.1,
      },
      labels: {
        fontFamily: "'Amatic SC', cursive",
        fontSize: 20,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    barWidth: 2.7,
    width: 350,
    height: 350,
    padding: 20,
  },
  chart: {
    width: 800,
    height: 300,
    padding: 70,
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    width: 350,
    height: 350,
    padding: 50,
  },
  legend: {
    gutter: 0,
    orientation: "horizontal",
    titleOrientation: "left",
    x: 280,
    y: 15,
    style: {
      // border: {
      //   stroke: "black",
      // },
      data: {
        type: "square",
      },
      labels: {
        fontFamily: "'Amatic SC', cursive",

        // fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 24,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
      title: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 5,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: "#455A64",
        strokeWidth: 2,
      },
      labels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 12,
        letterSpacing: "normal",
        padding: 8,
        fill: "#455A64",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 50,
  },
  stack: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    width: 350,
    height: 350,
    padding: 50,
  },
  tooltip: {
    style: {
      fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      letterSpacing: "normal",
      padding: 5,
      fill: "#455A64",
      stroke: "transparent",
      strokeWidth: 0,
      pointerEvents: "none",
    },
    flyoutStyle: {
      stroke: "#212121",
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none",
    },
    cornerRadius: 5,
    pointerLength: 10,
  },
};

export default ChartTheme;
