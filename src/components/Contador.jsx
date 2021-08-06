import React,{useState} from 'react'


function Contador() {
    
    const [contador, setContador] = useState(0);
    
    const sumarUno = () =>{
        setContador(contador+1)
        
    }
    const restarUno = () =>{
        setContador(contador-1)
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-6 d-flex justify-content-center"}>
                    <h1 className={"display-1 mx-auto"}>Contador:  {contador}</h1>
                </div>
                    <div className="col-6 d-flex justify-content-evenly align-items-center">
                        <button onClick ={sumarUno} type="button" className="btn btn-light">+ 1</button>
                        <button  onClick ={restarUno} type="button" className="btn btn-dark">- 1</button>
                    </div>
            </div>
        </div>
    )
}

export default Contador
