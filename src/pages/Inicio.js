import Page from './Page';
import ResumeUserDay from '../components/ResumeUserDay';
import ButtonInit from '../components/ButtonInit';
import Time from '../components/Time';
import { useEffect, useState } from 'react';
import { registroInicio, registroFin } from '../components/services/services';
import { getData } from "../components/services/services";
import TipoParada from '../components/TipoParada';

const Inicio = () => {

    const [ubicacion, setUbicacion] = useState('oficina') 
    const [mostrarComponente, setMostrarComponente] = useState(false)

    const registrarInicio = () => {
        let formData = new FormData();

        formData.append('ubicacion', ubicacion);

        registroInicio(formData).then(res => {
            console.log(res)
          })
    }

    const registrarFin = () => {
        setMostrarComponente(true)
        registroFin().then(res => {
            console.log(res)
          })
    }

    const [date, setdate] = useState('')

    useEffect( () => {
        getData().then(res => {
            console.log('getdata',res)
            setdate(res)
          });
    },[])

    return(
        <Page>  
            <div className='justify-between items-center flex pt-8 pb-8'>
                <Time></Time>
                {!mostrarComponente && <ButtonInit inicioRegistrar={registrarInicio} finRegistrar={registrarFin}></ButtonInit>}  
            </div>
            <div>
                {mostrarComponente && <TipoParada></TipoParada>}
            </div>
            <div>
                <ResumeUserDay fecha={date} ubicacionSet={setUbicacion}></ResumeUserDay>   
            </div>        
        </Page>
    )
};

export default Inicio;