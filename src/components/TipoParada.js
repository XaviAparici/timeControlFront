import { useState } from "react";

const TipoParada = (props) => {

return (
    <div className='col-span-1 flex items-center justify-center space-x-2'>
        <div>
            <div className='p-2 w-22 rounded bg-green-500 text-white'>Fin jornada</div>
        </div>
        <div>
            <div className='p-2 w-22 rounded bg-green-500 text-white'>Descanso</div>
        </div>
    </div>
)
}

export default TipoParada;