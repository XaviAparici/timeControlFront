import axios from 'axios';

export const datosUsuario = () =>{

    return axios

        .get('http://localhost:8000/index', {

        })

        .then(res =>{           

            console.log(res.data)
            return res.data

        })

        .catch(err =>{

            return err

        })

}

export const registroInicio = (ubicacion) =>{

    return axios

        .post('http://localhost:8000/registroInicio', ubicacion, {

        })

        .then(res =>{           

            console.log(res.data)
            return res.data

        })

        .catch(err =>{

            return err

        })

}

export const registroFin = () =>{

    return axios

        .post('http://localhost:8000/registroFin', {

        })

        .then(res =>{           

            console.log(res.data)
            return res.data

        })

        .catch(err =>{

            return err

        })

}

export const getData = () =>{

    return axios
        .get('http://localhost:8000/getData', {
        })

        .then(res =>{           
            return res.data
        })

        .catch(err =>{
            return err
        })

}