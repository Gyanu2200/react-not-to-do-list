import React from 'react'
import BadList from './BadList'
import EntryList from './EntryList'

export default function ListArea() {
  return (
    <div className="row m-4">
        <div className="col">
            <EntryList/>
        </div>
        <div className="col">
            <BadList/>
        </div>
    </div>
  )
}
