import { useState } from "react";
import Page from "./Page";

const Ausencias = () => {

    const [data, setData] = useState('');

    const Solicitar = () => {
        console.log('Solicitado');
    }

    return (
        <Page>
            <div className='grid gap-4 grid-cols-1 divide-y p-6'>
                <div className='col-span-1 flex items-center justify-between'>
                    <div>
                        Horas restantes
                    </div>
                    <div>
                        100
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex justify-between pt-4 pb-2.5'>
                        Fecha Inicio:
                        <input type='date'></input>
                    </div>
                    <div className='flex justify-between'>
                        Fecha Fin:
                        <input type='date'></input>
                    </div>
                </div>
                <div className='flex pt-3 justify-center'>
                    <div onClick={() => Solicitar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                        Solicitar
                    </div>
                </div>
                <div className='col-span-1'>
                    {data ? <div className='flex items-center justify-between'>
                        <div>
                            FechaInicio
                        </div>
                        <div>
                            FechaFin
                        </div>
                        <div>
                            Estado
                        </div>
                    </div> : <div className='text-center'>Sin registro</div>}
                </div>
            </div>
        </Page>
    )
};

export default Ausencias;