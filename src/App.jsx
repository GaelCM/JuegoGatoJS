import { useState } from 'react'
import { Celda } from './components/Celda'
import { Turnos,Ganadores} from './constantes'
import { ModalGanador } from './components/ModalGanador'
import confetti from 'canvas-confetti'

import './App.css'

export function App() {
  


  const [tablero,actualizarTablero]=useState(Array(9).fill(null))
  const [turno,actualizarTurno]=useState(Turnos.X)
  const [ganador,actualizarGanador]=useState(null)

  const jugadaSiguiente=(index)=>{

      if(tablero[index] || ganador){  //checamos que si ya tenemos un valor en esa posición no haga ya nada
        return 
      }
      const nuevoTablero=[...tablero]
      nuevoTablero[index]=turno
      actualizarTablero(nuevoTablero)
                            //actualizamos el siguiente turno
      if(turno==Turnos.X){
        actualizarTurno(Turnos.Y)
      }else{
        actualizarTurno(Turnos.X)
      }

      const ganadorFinal=checarGanador(nuevoTablero)

      if(ganadorFinal!=null){
        actualizarGanador(ganadorFinal)
        confetti()
      }else if(checarEmpate(nuevoTablero)){
        actualizarGanador(false)
      }
    
  }
  
  
  const checarGanador=(tableroARevisar)=>{
    for(const fila of Ganadores){
      const [a,b,c]=fila
      if(tableroARevisar[a]&&tableroARevisar[a]==tableroARevisar[b]&&tableroARevisar[a]==tableroARevisar[c]){
        return tableroARevisar[a]
      }
    }
    return null
  }

  const checarEmpate=(tableroARevisar)=>{

    return tableroARevisar.every(item=>item!=null) //en esta linea EVERY NOS SIVER PARA REVISAR QUE todos
                                                  //los elementos de nuestro array cumplan con una condición 
                                                  //y nos devuelve TRUE O FALSE, aqui vemos que todo nuestro array debe ser indiferente de null
  }                                           

  // eslint-disable-next-line no-unused-vars
  const reiniciar=(tableroARevisar)=>{
    actualizarTablero(Array(9).fill(null))
    actualizarTurno(Turnos.X)
    actualizarGanador(null)
  }


  return (
    <section className='template'>
      <h1>Juego de Gato hecho por Gael Cuevas</h1>
      <section className='tablero'>
      {
        tablero.map((item,index)=>{
          return(
            <Celda key={index} index={index} jugadaSiguiente={jugadaSiguiente}>{item}</Celda>
          )
        })
      }
      </section>
      <h2>Es turno de</h2>
      <section className='turno'>
        <Celda isSelected={turno==Turnos.X}>{Turnos.X}</Celda>
        <Celda isSelected={turno==Turnos.Y}>{Turnos.Y}</Celda> 
      </section>

      <ModalGanador ganador={ganador} reinicio={reiniciar}></ModalGanador>
       
    </section>
  )

}
