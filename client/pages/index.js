import ioClient from 'socket.io-client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [msgFromServer, setMessageFromServer] = useState('')

  useEffect(async () => {
    const socket = await ioClient('http://localhost:4000', {
      path: '/connect-socket',
      transports: ['websocket']
    })

    socket.emit('fromClient', "Hello from client....")
    socket.on('fromServer', (msg) => {
      setMessageFromServer(msg)
    })

  }, [])

  return (
    <div>
      <p>Server Message: {msgFromServer}</p>
    </div>
  )
}
