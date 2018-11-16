import React from 'react'
import Entry from './Entry'

const EntryList = ({ entries }) => (
    <ul>
        {entries.map(entry => (
            <Entry key={entry.id} {...entry} />
        ))}
    </ul>
)

export default EntryList