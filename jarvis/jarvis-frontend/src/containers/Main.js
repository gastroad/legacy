import React, { useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import If from "../components/If";
import { axiosJarvis } from "../components/axios";

var synth = window.speechSynthesis;
export function Main(props) {
  const context = useContext(Context);
  useEffect(() => {
    axiosJarvis.get(`/api/main`).then(data => {
      console.log(data);
    });
  });

  function shuffleRandom() {
    const { member } = context.state;
    const count = member.length - 1;
    var newMember = [];
    var ar = [];
    var time = [];
    var temp, rnum;
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", context.member);
    }
    const lastData = localStorage.getItem("data").split(",");
    for (var i = 0; i <= count; i++) {
      ar.push(i);
    }

    for (var j = 0; j < ar.length; j++) {
      rnum = Math.floor(Math.random() * count);
      temp = ar[j];
      ar[j] = ar[rnum];
      ar[rnum] = temp;
    }
    for (var k of ar) {
      newMember.push(member[k]);
      time.push(0);
    }

    for (i = 0; i < count; i++) {
      if (lastData[i] == newMember[i]) {
        return shuffleRandom();
      }
    }
    return newMember;
  }

  function scrumStart() {
    const data = shuffleRandom();
    const utterThis = new SpeechSynthesisUtterance(data[0]);
    synth.speak(utterThis);
    localStorage.setItem("data", data);
    context.actions.setShuffleMember({ data });
    props.history.push(`/sub`);
  }
  const ranking = () => {
    props.history.push(`/Ranking`);
  };
  const { member, shuffleMember } = context.state;
  return (
    <div id={"main"}>
      <h1>Jarvis</h1>
      <If condition={!context.state.shuffleMember.length}>
        {member.map((content, index) => {
          return (
            <p key={index} className={`member-list slidein`}>
              {content}
              <span style={{ marginLeft: "5px", color: "gray" }}>
                {context.state.times[index]}
              </span>
            </p>
          );
        })}
      </If>
      <If condition={context.state.shuffleMember.length}>
        {shuffleMember.map((content, index) => {
          return (
            <p key={index} className={`member-list slidein`}>
              {content}
              <span style={{ marginLeft: "5px", color: "gray" }}>
                {context.state.times[index]}
              </span>
            </p>
          );
        })}
      </If>
      <img src={"../img/S1.png"} style={{ width: "200px" }} />
      <button onClick={scrumStart} className={"btn sub"} style={{ left: "5%" }}>
        start
      </button>
      <button onClick={ranking} className={"btn sub"} style={{ right: "5%" }}>
        Ranking
      </button>
    </div>
  );
}
