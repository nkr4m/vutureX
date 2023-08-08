'use client'
import React from 'react'
import { useParams } from 'next/navigation';
export default function BoardPage() {
  const { id } = useParams();

  return <div>{id}</div>;
}
