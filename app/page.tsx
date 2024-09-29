import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="flex justify-center w-full">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <Image className="rounded-lg" src="https://www.pexels.com/photo/concrete-road-between-trees-1563356" alt="image" width={500} height={500} priority/>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Home;
