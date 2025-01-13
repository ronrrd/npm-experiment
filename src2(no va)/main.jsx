import Plotly from "plotly.js-dist-min";

const root = document.getElementById("root");
Plotly.newPlot(
  root,
  [
    {
      x: [1, 2, 3, 4, 10],
      y: [1, 2, 4, 8, 20],
    },
  ],
  {
    margin: { t: 0 },
  },
);
