import Grafica from "./Grafica";
import { useState, useEffect } from 'react';
import moment from "moment";

const ResumeUserDay = (props) => {

    const[date, setDate] = useState('')

    useEffect( () => {
        //if(props.fecha){
            console.log('hosfafsafaf',props.fecha)
            // setDate(props.fecha)
        //}
    },[]);

    return (
        <div className='grid grid-cols-1 divide-y'>
            <div className='p-2'>
                <div className='col-span-1 flex items-center justify-between'>
                    <div>
                        Ubicación
                    </div>
                    <div>
                        <select className='text-center' onChange={(e)=>{props.ubicacionSet(e.target.value)}}>
                            <option value="casa">Casa</option>
                            <option selected value="oficina">Oficina</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex items-center justify-between p-2'>
                <div>
                    Fecha Inicio
                </div>
                <div className='text-center'>
                    {date && moment(date[0].horaInicio).format("MM/D/YYYY HH:mm:ss")}
                </div>
            </div>
            <div className='col-span-1 flex items-center justify-between p-2'>
                <div>
                    Fecha Final
                </div>
                <div className='text-center'>
                    {date && moment(date[date.length-1].horaFin).format("MM/D/YYYY HH:mm:ss")}
                </div>
            </div>
            <div className='col-span-1 flex items-center justify-between p-2'>
                <div>
                    Horas Semanales
                </div>
                <div className='text-center'>
                    32/40
                </div>
            </div>
            <div>
               <Grafica></Grafica>
            </div>
        </div>
    )
}

export default ResumeUserDay;