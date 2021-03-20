import React from 'react'
import { useParams } from 'react-router'

const RideSelect = () => {
    const {rideName} = useParams()
    return (
        <div>
           <h1>{rideName} is calling</h1>
        </div>
    )
}

export default RideSelect
