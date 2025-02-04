"use client"
import { Partner } from '@/entities/partner.entity'
import React from 'react'

import { 
  Bar, 
  BarChart,
  XAxis,
  YAxis,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"


const chartData = [
  { month: "January", sales: 69},
  { month: "February", sales: 17 },
  { month: "March", sales: 32, },
  { month: "April", sales: 20, },
  { month: "May", sales: 41, },
  { month: "June", sales: 11, },
  { month: "July", sales: 57, },
  { month: "August", sales: 15, },
  { month: "September", sales: 57, },
  { month: "October", sales: 52, },
  { month: "November", sales: 92, },
  { month: "December", sales: 42, },
]

interface StatsProps {
  partner:Partner
}

const Stats = ({partner}:StatsProps) => {
  return (
    <div className='flex justify-between gap-4 h-[300px]'>
        <div className='flex-[8] bg-white'>
          <ResponsiveContainer>
            <BarChart data={chartData} width={500} height={300}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#FF3D00" radius={0} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='flex-[2] bg-white py-2 px-8 flex flex-col justify-between'>
            <div className='flex flex-col gap-2'>
              <span className='font-bold'>Due date</span>
              <span className='text-sm text-text text-left'>Nov17 - Nov26</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-left'>number of sales</span>
              <span className='text-sm text-text text-left'>12345678</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-left'>Refrence</span>
              <span className='text-sm text-text text-left'>INV-921</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-left'>{partner.storename}</span>
              <span className='text-sm text-text text-left'>12345678</span>
            </div>
        </div>
    </div>
  )
}

export default Stats