import { useState, useEffect } from 'react'

export default function Time() {

    const [hour, setHour] = useState(new Date())
    const [showBoom, setShowBoom] = useState(false)

    //A NE PAS FAIRE APPAREMENT (A VERIFIER)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setHour(new Date())
    //     }, 1000)
    // })

    useEffect(() => {
        const interval = setInterval(() => setHour(new Date()), 1000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => setShowBoom(true), 10000);
        return () => clearInterval(interval);
    }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{marginBottom: '50px'}}>{hour.toLocaleTimeString('fr-FR', { hour12: false })}</h1>
        <h1>{showBoom ? "BOOM" : ""}</h1>
    </div>
  )
}