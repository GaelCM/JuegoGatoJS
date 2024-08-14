export const ModalGanador=({ganador,reinicio})=>{

    const reiniciar=()=>[
        reinicio()
    ]

    if(ganador!=null){
        return(
        <section className='winner'>
        <div className='text'>
          <h2>
            {
              ganador==false ? 'empate' : 'Ganó'
            }
          </h2>
            
          <div>{ganador}</div>  
    
          <footer>
            <button onClick={reiniciar}>Reiniciar Juego</button>
          </footer>

        </div>
        </section>)
    }
}