'use client'
import { subtitle, title } from '@/components/primitives'
import React from 'react'
import {Snippet} from "@nextui-org/react";
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import BottomPart from './bottom-part';

export default function DashboardPage() {

  

  return (
    <>

      <motion.div initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }} className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="inline-block max-w-lg justify-center">
              <h1 className={title()}>Survey&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>Dashboard&nbsp;</h1>
              <br />
              <h2 className={subtitle({ class: "mt-1" })}>
                Create a space for your customized survey.
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
              Container Name <Snippet symbol="#" variant="bordered">npm install @nextui-org/react</Snippet>
              </div>
              <div className="col">
              Container Link <Snippet symbol="#" variant="bordered">npm install @nextui-org/react</Snippet>
              </div>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
      <br/>
      <Divider/>
      <br/>

      <BottomPart/>



    </>
  )
}
