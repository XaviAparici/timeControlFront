import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import Page from "./Page";

const Justificantes = () => {

    const Justificar = () => {
        console.log('Justificar');
    }
    const Anterior = () => {
        console.log('Anterior');
    }
    const Siguiente = () => {
        console.log('Siguiente');
    }

    return (
        <Page>
            <div>
                <div>
                    <div className='flex pt-3 justify-between items-center'>
                        Lunes 14/03/2022
                        <div onClick={() => Justificar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                            Justificar
                        </div>
                    </div>
                    <div className='flex pt-3 justify-between items-center'>
                        Martes 15/03/2022
                        <div onClick={() => Justificar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                            Justificar
                        </div>
                    </div>
                    <div className='flex pt-3 justify-between items-center'>
                        Miercoles 16/03/2022
                        <div onClick={() => Justificar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                            Justificar
                        </div>
                    </div>
                    <div className='flex pt-3 justify-between items-center'>
                        Jueves 17/03/2022
                        <div onClick={() => Justificar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                            Justificar
                        </div>
                    </div>
                    <div className='flex pt-3 justify-between items-center'>
                        Viernes 18/03/2022
                        <div onClick={() => Justificar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                            Justificar
                        </div>
                    </div>
                    <div className='flex pt-3 justify-between items-center'>
                        <div onClick={() => Anterior()} className='p-2 text-center text-white w-8 rounded bg-gray-400'>
                            <img src='./img/left-arrow.svg'></img>
                        </div>
                        <div onClick={() => Siguiente()} className='p-2 text-center text-white w-8 rounded bg-gray-400'>
                            <img src='./img/right-arrow.svg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
};

export default Justificantes;