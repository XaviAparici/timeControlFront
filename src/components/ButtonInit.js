import { useState } from "react";

const ButtonInit = (props) => {

    const [isInit, setisInit] = useState(false)

    const Entrar = () => {
        console.log('Pulsado');
        if (isInit) {
            setisInit(false)
            props.finRegistrar()
        }
        else {
            setisInit(true)
            props.inicioRegistrar()
        }
    }

    return (
        <div className='flex justify-end'>
            <div onClick={() => Entrar()} className={"p-2 w-20 rounded "+(!isInit ? 'bg-green-500' : 'bg-red-400')}>
                <p className='text-center text-white'>{!isInit ? 'Entrar' : 'Parar'}</p>
            </div>
        </div>
    )
}

export default ButtonInit;