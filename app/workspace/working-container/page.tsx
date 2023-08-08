'use client'
import { subtitle, title } from '@/components/primitives'
import React from 'react'
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import DataTableComponent from '@/components/dataTable';

export default function WorkingContainerPage() {
  return (
    <>

      <motion.div initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }} className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="inline-block max-w-lg justify-center">
              <h1 className={title()}>Working&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>Containers&nbsp;</h1>
              <br />
              <h2 className={subtitle({ class: "mt-1" })}>
                Select a container to resume working
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-7">
          <DataTableComponent/>
          </div>
        </div>
      </motion.div>





    </>
  )
}
