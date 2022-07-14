import React from 'react'
import ChoseGenre from './ChoseGenre'
import ChosePrice from './ChosePrice'
import ChoseSort from './ChoseSort'

export default function FilterControl () {
  return (
    <div>
      <ChosePrice/>
      <ChoseGenre/>
      <ChoseSort/>
    </div>
  )
}