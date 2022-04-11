import Page from "./Page";

const Configuracion = () => {

    const Editar = () => {
        console.log('Editar foto');
    }

    return (
        <Page>
            <div>
                <div className='flex justify-center'>
                    <img className='h-24 rounded-full w-24' src='https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg' />
                </div>
                <div className='flex pt-3 justify-center'>
                    <div onClick={() => Editar()} className='p-2 text-center text-white w-20 rounded bg-green-500'>
                        Editar
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-2 p-6">
                    <div className='col-span-1'>
                        Nombre
                        <input className='w-full border-b-2' type='text'></input>
                    </div>
                    <div className='col-span-1'>
                        Apellidos
                        <input className='w-full border-b-2' type='text'></input>
                    </div>
                    <div className='col-span-2'>
                        Correo
                        <input className='w-full border-b-2' type='email'></input>
                    </div>
                    <div className='col-span-1'>
                        Tlf
                        <input className='w-full border-b-2' type='number'></input>
                    </div>
                </div>
            </div>
        </Page>
    )
};

export default Configuracion;