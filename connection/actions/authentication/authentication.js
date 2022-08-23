import api from '../../api';
import localStorage from 'react-native-sync-localstorage'


export const LoginUser = async(data, org,callback, setLoading)=>{
    try { 
        const response = await api.post(`tenant/medal/tenant/auth/login/`,data);
        // console.log(response)
        // alert(org)
        if (response.status == 200) {
            console.log(response.data)
            callback(response)
            setLoading(false)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('org_name','medal')
            localStorage.setItem('email',data.email)
            localStorage.setItem('password',data.password)
            localStorage.setItem('user_type',response.data.user_type)
                    
        } else {
        //   console.log(response.data)
          alert(response.message)
        //   callback(response.data)
        setLoading(false)
        }
    } catch (error) {
        console.log(error)
        // if(error.code)
        setLoading(false)
        if(error.message.includes('401')||error.message.includes('404')){
            alert('Invalid Login Details.')
            // alert(error.message)
        }else{
            // alert(error.response.data.errors[0].message)
        alert(error.message)
        console.log(error)
        }
        // setLoading(false)reposn

    }
}
export const ValidateMember = async(data,org_name ,callback,setErrCallback)=> {
    try {
        const response = await api.post(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`, data);

        if(response.status == 200){
            alert('registration Successsful');
            callback(response)
        }else {
            alert(response.message)
        }
    }catch(error){
        setErrCallback(error)
    }
}

