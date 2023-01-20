import api from "../api";
import localStorage from "react-native-sync-localstorage";
import axios from "axios";

const org_name = "aani";
export const LoginUser = async (data, callback) => {
  try {
    const response = await api.post(`tenant/aani/tenant/auth/login/`, data);

    if (response.status == 200) {
      // console.log(response.data)
      callback(response);
      // setLoading(false)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("org_name", org);
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      localStorage.setItem("user_type", response.data.user_type);
    } else {
      //   console.log(response.data)
      alert(response.message);
      //   callback(response.data)
      // setLoading(false)
    }
  } catch (error) {
    console.error(error.message);
    // if(error.code)
    // setLoading(false)
    if (error.message.includes("401") || error.message.includes("404")) {
      alert("Invalid Login Details.");
    } else {
      // alert(error.response.data.errors[0].message)
      alert(error.message);
      // console.log(error.response.data.message)
    }
    // setLoading(false)reposn
  }
};

// tenant/{{shortName}}/tenant/news/getyournews/
//Gets News for a Member
export const GetNews = async (callback,query,errcallback) => {
  if(query === null || query === undefined){
      await api.get(`tenant/aani/tenant/news/newsview/get_news/`)
      .then(response => response.data)
      .then(data => callback(data))
      .catch(err => console.log(err))
  }else{
    await api.get(`tenant/aani/tenant/news/newsview/get_news/?${query.type}=${query.value}`)
    .then(response => response.data)
    .then(data => callback(data))
    .catch(err => errcallback(err.response.data.message.error))
  }
};

// Like News
export const LikeDisLikeNews = async (data, callback,errcallback) => {
  try {
    const response = await api.post(
      `tenant/${org_name}/tenant/news/getyournews/`,
      data
    );

    if (response.status == 200) {
      callback(response.data);
    } else {
      //   console.log(response.data.status)
      callback(response.data);
    }
  } catch(error) {
    errcallback(error)
  }
};

//Get Publications
export const GetPublications = async (callback,query,errcallback) => {
  if(query === null || query === undefined) {
        await api.get(
          `tenant/aani/tenant/publication/getyourpublication/`
        ).then(response => response.data)
        .then(data => callback(data))
        .catch(err => console.log(err))
    }else{
      await api.get(
          `tenant/aani/tenant/publication/getyourpublication/?${query.type}=${query.value}`
        ).then(response =>  response.data)
        .then(data => callback(data))
        .catch(err => errcallback(err.response.data.message.error))
    }
};

// Like Publication
export const LikeDisLikePublication = async (data, callback) => {
  try {
    const response = await api.post(
      `tenant/${org_name}/tenant/publication/getyourpublication/`,
      data
    );

    if (response.status == 200) {
      callback(response);
    } else {
      //   console.log(response.data.status)
      callback(response.data);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

// Get Events
// /tenant/event/eventview/get_events/?is_chapter=true
export const GetEvents = async (callback) => {
  try {
    const response = await api.get(
      `tenant/aani/tenant/event/eventview/get_events/`
    );

    if (response.status == 200) {
      callback(response);
    } else {
      //   console.log(response.data.status)
      callback(response.data);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get My Dues

export const GetMyDues = async (status, callback) => {
  try {
    const response = await api.get(`tenant/${org_name}/tenant/dues/memberdue/`);

    if (response.status == 200) {
      callback(response);
      // console.log(response)
    } else {
      console.log(response.data.status);
      callback(response.data);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get Gallery

export const GetGallery = async (status, callback,errcallback,extra) => {
  console.log('extras',extra)
  try {
    const response = await api.get(
      `tenant/aani/tenant/extras/galleryview/member_get_gallery/${extra !== undefined ? '?'+extra : ''}`
    );

    if (response.status == 200) {
      callback(response.data.data);
    } else {
      // console.log(response.status);
      callback(response.status);
    }
  } catch (error) {
    // console.error(error);
    errcallback(error)
    // setLoading(false)
  }
};

// /tenant/extras/ticketview/
// Generate Ticket
export const GenerateTicket = async (status, callback, data, showModal) => {
  try {
    const response = await api.post(
      `tenant/${org_name}/tenant/extras/ticketview/`,
      data
    );

    if (response.status == 201) {
      callback(response);
      // console.log(response)
    } else {
      //   console.log(response.status)
      //   callback(response.status)
      showModal(false);
      alert(response.status);
    }
  } catch (error) {
    showModal(false);
    alert(error.error);
    console.error(error);
    // setLoading(false)
  }
};

// /tenant/auth/ManageMemberValidation/
// Get Validation Fields
export const ValidationFields = async (callback, org_name1, data) => {
  try {
    const response = data
      ? await api.post(
          `tenant/${org_name}/tenant/auth/ManageMemberValidation/`,
          data
        )
      : await api.get(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`);

    if (response.status == 200) {
      callback(response);
      // console.log(response)
    } else {
      //   console.log(response.status)
      //   callback(response.status)
      // showModal(false)
      alert(response.message);
    }
  } catch (error) {
    // showModal(false)
    alert(error.message);
    console.error(error);
    // setLoading(false)
  }
};

// Create

export const CreateUser = async (data, org_name1, callback, setLoader) => {
  // console.log(data)
  try {
    const response = await api.post(
      `tenant/${org_name}/tenant/auth/ManageMemberValidation/create_member/`,
      data
    );

    if (response.status == 200) {
      callback(response);
      setLoader(false);
    } else {
      setLoader(false);
      alert(response);
      console.log(response);
      //   callback(response)
    }
  } catch (error) {
    setLoader(false);
    alert(error);
    console.error(error);
    // setLoading(false)
    console.log(error);
  }
};

// /tenant/faq/faq/members_view_faq/
//Get FAQ
export const GetFAQ = async (status, callback) => {
  try {
    const response = await api.get(
      `tenant/${org_name}/tenant/faq/faq/members_view_faq/`
    );

    if (response.status == 200) {
      callback(response);
    } else {
      console.log(response.status);
      callback(response.status);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

// user/memberlist-info/get_all_members/
//Get Members
export const GetMembers = async (callback,errcalback) => {
  try {
    const response = await api.get(
      `tenant/aani/tenant/user/memberlist-info/get_all_members/`
    );

    if (response.status == 200) {
      callback(response.data.data);
      // console.log('true', response.data)
    }
  } catch (error) {
    // console.error('error',error.response);
    errcalback(error.response)
  }
};

// user/memberlist-info/get_all_exco/
//Get Events
export const GetExcos = async (status, callback) => {
  try {
    const response = await api.get(
      `tenant/${org_name}/tenant/user/memberlist-info/get_all_exco/`
    );

    if (response.status == 200) {
      callback(response);
    } else {
      console.log(response.status);
      callback(response.status);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

//Get Events
export const GetElections = async (callback,errcalback) => {
  try {
    const response = await api.get(
      `tenant/aani/tenant/election/adminmanageballotbox/list_of_elections/`
    );

    if (response.status == 200) {
      callback(response);
    } else {
      console.log(response.status);
      callback(response.status);
    }
  } catch (error) {
    errcalback(error.response);
    // setLoading(false)
  }
};

// /user/memberlist-info/my_profile/
// Get Profile
export const GetProfile = async (callback) => {
  try {
    const response = await api.get(
      `tenant/aani/tenant/user/profile/`
    );

    if (response.status == 200) {
      callback(response.data.data[0]);
    } else {
      console.log(response.status);
      callback(response.status);
    }
  } catch (error) {
    console.error(error);
    // setLoading(false)
  }
};

// tenant/election/adminmanageballotbox/list_of_contestant/?election_id=2

export const GetContestants = async (id, callback, setLoading) => {
  try {
    const response = await api.get(
      `tenant/${org_name}/tenant/election/adminmanageballotbox/list_of_contestant/?election_id=${id}`
    );

    if (response.status == 200) {
      callback(response);
      setLoading(false);
    } else {
      console.log(response.status);
      callback(response.status);
      setLoading(false);
    }
  } catch (error) {
    console.error(error);
    setLoading(false);

  }
};

export const RequestCall = (type,data,callback,errcallback,path,formdata) => {
  const contentType = formdata === 'formdata' ? 'multipart/form-data' : null
  switch (type) {
    case 'get':
      api.get(`/tenant/aani/tenant/${path}`)
      .then(response => response.data)
      .then(data => callback(data))
      .catch(err => errcallback(err.response))
      break;
    case 'post':

    const token = localStorage.getItem('token')

      if(formdata === 'formdata'){
        var request = {
          body: data,
          method: 'POST',
          headers: {
            'Content-Type': contentType,
            Authorization : `Token ${token}`
          },
        }

        fetch(`https://aani-backend-production.up.railway.app/tenant/aani/tenant/${path}`,request)
        .then(res => res.json())
        .then(res => callback(res))
        .catch(err => 
          errcallback(err))
      }else{
      api.post(`/tenant/aani/tenant/${path}`,data)
      .then(response => response.data)
      .then(data => callback(data))
      .catch(err => errcallback(err.response))}
      break;
    case 'put':
      api.put(`/tenant/aani/tenant/${path}`)
      .then(response => response.data)
      .then(data => callback(data))
      .catch(err => errcallback(err))
      break;
    default:
      break;
  }
}

export const MultipleRequest = (arr,callback,errcallback) => {
  axios.all(arr)
  .then(axios.spread((...res) => {
    callback(res)
  }))
  .catch(err => {
    errcallback(err.response.data.message.error)})
}
