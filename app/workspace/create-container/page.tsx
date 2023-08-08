'use client'
import { subtitle, title } from '@/components/primitives'
import React from 'react'
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function CreateContainerPage() {
  return (
    <>

      <motion.div initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }} className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="inline-block max-w-lg justify-center">
              <h1 className={title()}>Create Survey&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>Container&nbsp;</h1>
              <br />
              <h2 className={subtitle({ class: "mt-1" })}>
                Create a space for your customized survey.
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Container Details</p>
                  <p className="text-small text-default-500">Please provide tehe container details and hit create</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="text" label="Name" />
                  <Input type="text" label="Container ID" disabled />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.div>





    </>
  )
}
