"use client";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export const CardQuestion = ({ questionNumber, title, level, topic }: any) => {
  return (
    <Card className="bg-zinc-950 ring-1 ring-zinc-600 container shadow-lg text-center hover:cursor-pointer p-4">
      <CardHeader className="flex flex-row text-center justify-between items-center">
        <Chip color="default"> {questionNumber}</Chip>
        <p>{topic}</p>
        <Chip color="default">{level}</Chip>
      </CardHeader>
      <CardBody className="text-center">{title}</CardBody>
    </Card>
  );
};
