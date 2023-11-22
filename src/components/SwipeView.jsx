import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import cat from "./cat.png";
// import penguin from "./penguin.png";

console.log(cat);
export default function SwipeView() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col items-center">
        <p className="gradient-text hover:scale-110 duration-150 gradient-text relative inset-x-[40vw] inset-y-[-20vh]">Preserve</p>
        <div className="flex flex-row items-center">
          {/* <img src={cat}/> */}
          <div className="p-5">
            <Button>Back</Button>
          </div>
          <div className="flex flex-col w-[50vw] h-[50vh]">
            <Card className="py-4 h-[50vh]">
              <CardBody className="overflow-visible py-2 flex justify-center items-center">
                Food go here lol
              </CardBody>
            </Card>
          </div>
          <div className="p-5">
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
