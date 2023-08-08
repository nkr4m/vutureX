import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function BottomPart() {

  const router = useRouter();

  const list = [
    {
      title: "Page1",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Page2",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Page3",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Page4",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Page5",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Page6",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Page7",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },

  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card onClick={()=>{
          router.push("dashboard/board/" + item.title)
        }} shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
