const tl = gsap.timeline();

function BarChart() {
  const tl = gsap.timeline();
  //time_bar loading Animation
  tl.to("#time_full", 5, {
    transformOrigin: "right",
    scaleX: 0,
    ease: "none",
    delay: 1.5,

    //time_bar out Animation
    onComplete: function() {
      tl.to("#time_bar", 0.2, {
        opacity: 0,

        //time_bar visible
        onComplete: function drawChart() {
          d3.select("#time_bar").attr("display", "none");

          //Size of svg and its bars for easy editing
          var margin = { top: 30, right: 30, bottom: 70, left: 30 },
            height = 350,
            barWidth = 398;
          //get Json data
          d3.json("data.json").then(function(data) {
            console.table(data);

            //Set scaling
            var y = d3
              .scaleLinear()
              .domain([
                0,
                d3.max(data, function(data) {
                  return data.Freq;
                })
              ])
              .range([height, 0]);
            var svg = d3.selectAll(".charts").append("g");

            /*
             * Generate databars from json data
             */
            //Answer 1
            svg
              .selectAll("bars")
              .data(data)
              .enter()
              .append("rect")
              .attr("class", "bars")
              .attr("x", 21)
              .attr("y", function(d) {
                return y(data[0].Freq);
              })
              .attr("width", barWidth)
              .attr("height", function(d) {
                return height - y(data[0].Freq);
              })
              .attr("fill", "#50345E")
              .attr("display", "none");

            //Answer 2
            svg
              .selectAll("bars")
              .data(data)
              .enter()
              .append("rect")
              .attr("class", "bars")
              .attr("x", 438)
              .attr("y", function(d) {
                return y(data[1].Freq);
              })
              .attr("width", barWidth)
              .attr("height", function(d) {
                return height - y(data[1].Freq);
              })
              .attr("fill", "#945CC5")
              .attr("display", "none");

            //Answer 3
            svg
              .selectAll("bars")
              .data(data)
              .enter()
              .append("rect")
              .attr("class", "bars")
              .attr("x", 856)
              .attr("y", function(d) {
                return y(data[2].Freq);
              })
              .attr("width", barWidth)
              .attr("height", function(d) {
                return height - y(data[2].Freq);
              })
              .attr("fill", "#2C89BB")
              .attr("display", "none");

            //Answer 4
            svg
              .selectAll("bars")
              .data(data)
              .enter()
              .append("rect")
              .attr("class", "bars")
              .attr("x", 1274)
              .attr("y", function(d) {
                return y(data[3].Freq);
              })
              .attr("width", barWidth)
              .attr("height", function(d) {
                return height - y(data[3].Freq);
              })
              .attr("fill", "#3BB9E1")
              .attr("display", "none");
          });
          //Move answer vakken down
          tl.to(".vak", 1, {
            y: 219,
            delay: 0.1,

            //Play extent animation for barchart
            onComplete: function extentBars() {
              d3.selectAll(".bars").attr("display", "block");
              tl.from(".bars", 1, {
                y: 0,
                scaleY: 0,
                transformOrigin: "bottom"
              });
            }
          });
        }
      });
    }
  });
}

BarChart();
