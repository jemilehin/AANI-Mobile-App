import api from '../api'
import localStorage from 'react-native-sync-localstorage'
import { call } from 'react-native-reanimated';
import { data } from 'autoprefixer';

const org_name ='medal'
export const LoginUser = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/anni/tenant/auth/login/`,data);
       
        if (response.status ==200) {
            // console.log(response.data)
            callback(response)
            // setLoading(false)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('org_name',org)
            localStorage.setItem('email',data.email)
            localStorage.setItem('password',data.password)
            localStorage.setItem('user_type',response.data.user_type)

        } else {
        //   console.log(response.data)
          alert(response.message)
        //   callback(response.data)
        // setLoading(false)
        }
    } catch (error) {
        console.error(error.message)
        // if(error.code)
        // setLoading(false)
        if(error.message.includes('401')||error.message.includes('404')){
            alert('Invalid Login Details.')
        }else{
            // alert(error.response.data.errors[0].message)
        alert(error.message)
        // console.log(error.response.data.message)
        }
        // setLoading(false)reposn

    }
}

// tenant/{{shortName}}/tenant/news/getyournews/
//Gets News for a Member
export const GetNews = async(callback)=>{
    try {
        const response = await api.get(`tenant/anni/tenant/news/getyournews/`)
    //    con
        if (response.status==200) {
            callback(response);
        } else {
            console.log(response.status)
        //   console.log(response.data.statusText)
          alert(response.status)
        //   callback(response)
        }
    } catch (error) {
        console.error('newserr',error)
        // console.log(error.response.detail)
        // alert(error)
        // setLoading(false)

    }
}

// Like News
export const LikeDisLikeNews = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${org_name}/tenant/news/getyournews/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

//Get Publications
export const GetPublications = async(callback)=>{
    try {
        const response = await api.get(`tenant/anni/tenant/publication/getyourpublication/`)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// Like Publication
export const LikeDisLikePublication = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${org_name}/tenant/publication/getyourpublication/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}


// Get Events
// /tenant/event/eventview/get_events/?is_chapter=true
export const GetEvents = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/event/eventview/get_events/?is_chapter=true`)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get My Dues

export const GetMyDues = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/dues/memberdue/`)
       
        if (response.status==200) {
            callback(response);
            // console.log(response)
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get Gallery

export const GetGallery = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/extras/galleryview/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}


// /tenant/extras/ticketview/
// Generate Ticket
export const GenerateTicket = async(status,callback, data, showModal)=>{
    try {
        const response = await api.post(`tenant/${org_name}/tenant/extras/ticketview/`, data)
       
        if (response.status==201) {
            callback(response);
            // console.log(response)
        } else {
        //   console.log(response.status)
        //   callback(response.status)
            showModal(false)
        alert(response.status)
        }
    } catch (error) {
        showModal(false)
        alert(error.error)
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/auth/ManageMemberValidation/
// Get Validation Fields
export const ValidationFields = async(callback, org_name1, data)=>{
    try {
        const response = data ? await api.post(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`, data)
        : await api.get(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`)
       
        if (response.status==200) {
            callback(response);
            // console.log(response)
        } else {
        //   console.log(response.status)
        //   callback(response.status)
            // showModal(false)
        alert(response.message)
        }
    } catch (error) {
        // showModal(false)
        alert(error.message)
        console.error(error)
        // setLoading(false)

    }
}


// Create 

export const CreateUser = async(data, org_name1,callback, setLoader)=>{
    // console.log(data)
    try {
        const response = await api.post(`tenant/${org_name}/tenant/auth/ManageMemberValidation/create_member/`, data)
       
        if (response.status==200) {
            callback(response)
            setLoader(false)
        } else {
            setLoader(false)
            alert(response)
          console.log(response)
        //   callback(response)
        }
    } catch (error) {
        setLoader(false)
        alert(error)
        console.error(error)
        // setLoading(false)
        console.log(error)

    }
}


// /tenant/faq/faq/members_view_faq/
//Get FAQ
export const GetFAQ = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/faq/faq/members_view_faq/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// user/memberlist-info/get_all_members/
//Get Members
export const GetMembers = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/user/memberlist-info/get_all_members/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// user/memberlist-info/get_all_exco/
//Get Events
export const GetExcos = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/user/memberlist-info/get_all_exco/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

//Get Events
export const GetElections = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/election/adminmanageballotbox/list_of_elections/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /user/memberlist-info/my_profile/
// Get Profile
export const GetProfile = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/user/memberlist-info/my_profile/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// tenant/election/adminmanageballotbox/list_of_contestant/?election_id=2

export const GetContestants = async(id,callback, setLoading)=>{
    try {
        const response = await api.get(`tenant/${org_name}/tenant/election/adminmanageballotbox/list_of_contestant/?election_id=${id}`)
       
        if (response.status==200) {
            callback(response);
            setLoading(false)
        } else {
          console.log(response.status)
          callback(response.status)
          setLoading(false)
        }
    } catch (error) {
        console.error(error)
        setLoading(false)

        // setLoading(false)

    }
}

// export const ValidateMember = (email,callback, errCallback) => {
//     api.post(`/tenant/anni/tenant/auth/ManageMemberValidation/`,email)
//     .then(res => res.data)
//     .then(data => console.log(data))
//     .catch(e => console.log(e))
// }
