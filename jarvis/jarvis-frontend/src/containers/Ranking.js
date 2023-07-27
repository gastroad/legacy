import React from "react";
import { Context } from "../Context/Context";
import If from "../components/If";
import { axiosJarvis } from "../components/axios";
import moment from "moment";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "../components/charOption";
export default class Ranking extends React.Component {
  state = {
    data: {},
    chartData: {
      labels: ["차도인", "한규현", "진현성", "이경민", "박중현", "윤민혁"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };
  componentDidMount() {
    axiosJarvis.get(`/api/main`).then(data => {
      var Chr = 0;
      var Han = 0;
      var Jin = 0;
      var Lee = 0;
      var Park = 0;
      var Yun = 0;

      for (let i = 0; i < data.data.length; i++) {
        Chr = Chr + data.data[i].Chr;
        Han = Han + data.data[i].Han;
        Jin = Jin + data.data[i].Jin;
        Lee = Lee + data.data[i].Lee;
        Park = Park + data.data[i].Park;
        Yun = Yun + data.data[i].Yun;
      }
      this.setState({
        data: data.data,
        chartData: {
          labels: ["차도인", "한규현", "진현성", "이경민", "박중현", "윤민혁"],
          datasets: [
            {
              label: "Ranking",
              data: [Chr, Han, Jin, Lee, Park, Yun],
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)"
            }
          ]
        }
      });
    });
  }
  back = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div id={"main"}>
        <h1>Ranking</h1>
        <Bar data={this.state.chartData} options={chartOptions} height={200} />
        <button onClick={this.back} className={"btn hover"}>
          back
        </button>
      </div>
    );
  }
}

//  function Ranking(props) {
//   const [Data, setData] = useState(0);
//   useEffect(() => {
//     axiosJarvis.get(`/api/main`).then(data => {
//       setData(data.data);
//     });
//   });
//   const back = () => {
//     props.history.goBack();
//   };

//   console.log(Data);
//   return (
//     <div id={"main"}>
//       <h1>Ranking</h1>
//       {/* <p key={index} className={`member-list slidein`}>
//         {content}
//         <span style={{ marginLeft: "5px", color: "gray" }}>
//           {context.state.times[index]}
//         </span>
//       </p> */}
//       <button onClick={back} className={"btn hover"}>
//         back
//       </button>
//     </div>
//   );
// }
