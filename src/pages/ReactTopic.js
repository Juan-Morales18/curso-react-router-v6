import { useParams } from "react-router-dom";

const style = {
  padding: "0.25rem",
  minHeight: "50vh",
  backgroundColor: "#009fe3",
  color: "#fff",
  textAlign: "center",
};

function ReactTopic() {
  let { topic: topicName } = useParams();

  return (
    <div style={style}>
      <h5>{topicName.toUpperCase()}</h5>
    </div>
  );
}

export { ReactTopic };
