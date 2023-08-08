'use client'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function registerPage() {
  return (
    <>

      <div className="justify-content-center" style={{ display: 'flex' }}>
        <Card className="col-11 col-xs-9 col-sm-7 col-md-5 col-lg-5">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">VutureX | Login</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Email" />
              <Input type="text" label="Name" />
              <Input type="password" label="Password" />
            </div> 
            <br/>
            <Button color="primary" radius="sm" className="col-2" variant="ghost">
            Ghost
          </Button> 
          </CardBody>

          

        </Card>
      </div>

    </>
  )
}
