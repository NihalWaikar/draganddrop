import React from "react";
import "./styles.css";
import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";

export default function App() {
  return (
    <div className="App">
      <DraggableCard text="Drag" bgColor="#FF9300" />
      <DraggableCard text="Drop" bgColor="#00A2FF" />
    </div>
  );
}

function DraggableCard({ text, bgColor }) {
    return (
        <Draggable>
            <Card
                style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}
            >
                <Button variant="text">BUY</Button>
                <Typography variant="h6">{text}</Typography>
            </Card>
        </Draggable>
    );
}


const DraggableButtonInCard = ({ text, bgColor }) => {
  return (
    <Card style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}>
      <Draggable>
        <Button variant="text">BUY</Button>
      </Draggable>
      <Typography variant="h6">{text}</Typography>
    </Card>
  );
};
