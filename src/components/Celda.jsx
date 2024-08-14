
export const Celda=({children,index,jugadaSiguiente,isSelected})=>{
    let diseño=""
    if(isSelected){
        diseño="celdaSeleccionada"
    }else{
        diseño="celda"
    }

    const jugadaSig=()=>{
        jugadaSiguiente(index)
    }


    return(
      <div className={diseño} onClick={jugadaSig}>{children}</div>
    )
  }