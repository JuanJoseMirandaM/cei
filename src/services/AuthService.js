//import decode from 'jwt-decode';
import axios from 'axios'
export default class AuthService{
    //Incializar variables importantes

    login(email,password){
        //console.log(email,password);
        const User = {
            email: email,
            password: password,
        };
         
        return axios.post('https://casilleros-app.herokuapp.com/api/users/login', User).then(res=>{
            console.log('res',res.data.user.username)
            this.setToken(res.data.user.username)
            this.setUser(res.data.user);
            return Promise.resolve(res);
        })        
    }

    /**
     * Verificar si existe un token de usuario y sigue siendo valido
     */
    loggedIn(){
        console.debug(this.getToken());
        return !!this.getToken();
        //return false;
    }

    setToken(token){
        console.log("token setting",token);
        localStorage.setItem('token_id',token);
    }

    getToken(){
        return localStorage.getItem('token_id');
    }

    logout(){
        console.log("logout");
        localStorage.removeItem('token_id');
        window.location.href = '/login';
        //console.log(this.getToken());
    }

    setUser(user){
        localStorage.setItem('user',JSON.stringify(user));
    }

    getUser(){
        let objStorage = JSON.parse(localStorage.getItem('user'));
        return objStorage;
    }

    getUserName(){
        let user = this.getUser();
        if(user){
            return user.username;
        }else{
            return false;
        }
    }

    getRol(){
        let user = this.getUser();
        if(user){
            return user.rol;
        }else{
            return false;
        }
    }
}
