import React, { useContext } from "react";
import Stopwatch from "../components/StopWatch/StopWatch";
import { Context } from "../Context/Context";
import If from "../components/If";
import { axiosJarvis } from "../components/axios";
var synth = window.speechSynthesis;
export function Sub(props) {
  const context = useContext(Context);
  if (!context.state.shuffleMember.length) {
    props.history.goBack();
  }
  function next(m, s, t) {
    const utterThis = new SpeechSynthesisUtterance(
      context.state.shuffleMember[context.state.number + 1]
    );
    synth.speak(utterThis);
    let time = context.state.times;
    time.push(`${m}:${s}-${Math.floor(t)}`);
    context.actions.setTimes(time);
    if (context.state.number + 1 == context.state.shuffleMember.length) {
      const NewMember = context.state.shuffleMember.map((member, index) => {
        switch (member) {
          case "한규현":
            return "Han";
          case "이경민":
            return "Lee";
          case "진현성":
            return "Jin";
          case "박중현":
            return "Park";
          case "차도인":
            return "Chr";
          case "윤민혁":
            return "Yun";
        }
      });
      const NewTime = context.state.times.map((time, index) => {
        return parseInt(time.split("-")[1]);
      });
      axiosJarvis
        .post(`/api/main`, {
          member: NewMember,
          time: NewTime
        })
        .then(data => {
          context.actions.setNumber(0);
          props.history.push("/main");
        });
      return;
    }
    context.actions.setNumber(context.state.number + 1);
  }

  return (
    <div id={"main"}>
      {context.state.shuffleMember.map((member, index) => {
        return (
          <div key={index}>
            <If condition={context.state.number === index}>
              <Stopwatch member={member} next={next} />
            </If>
          </div>
        );
      })}
    </div>
  );
}
