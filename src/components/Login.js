import Page from "../pages/Page";

const Login = () => {

    const Login = () => {
        console.log('Login');
    }

    return (
        <Page>
            <div>
                <div className='flex justify-center'>
                    <img className='h-24 rounded-full w-24' src='./img/logoFractalys.png' />
                </div>
                <div className='pt-2 grid grid-cols-1'>
                    <div>
                        Usuario
                    </div>
                    <div>
                        <input type='text' className='border-2' />
                    </div>
                    <div>
                        Contraseña
                    </div>
                    <div>
                        <input type='password' className='border-2' />
                    </div>
                    <div className='pt-2'>
                        <div onClick={() => Login()} className='p-2 text-center text-white w-22 rounded bg-gray-400'>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </Page>

    )
};

export default Login;