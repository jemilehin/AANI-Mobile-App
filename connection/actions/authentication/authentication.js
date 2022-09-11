import api from "../../api";
import localStorage from "react-native-sync-localstorage";

export const LoginUser = async (data, callback, errcallback) => {
  try {
    const response = await api.post(`tenant/aani/tenant/auth/login/`, data);
    // console.log(response)
    // alert(org)
    if (response.status == 200) {
      callback(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("org_name", "medal");
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      localStorage.setItem("user_type", response.data.user_type);
    }
  } catch (error) {
    errcallback();
    alert("Incorrect login password or username");
  }
};
export const ValidateMember = async (data, callback, errCallback) => {
  try {
    const response = await api.post(
      `tenant/aani/tenant/auth/ManageMemberValidation/`,
      data
    );
    if (response.status == 200) {
      callback(response.data.data[0].user);
    }
  } catch (error) {
    errCallback(error);
  }
};

export const RegisterAsMember = async (data, callback, errCallback) => {
  console.log("plus", data);
  try {
    const response = await api.post(
      "tenant/aani/tenant/auth/ManageMemberValidation/create_member/",
      data
    );

    if (response.status == 200) {
      callback(response.data);
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    console.log(error);
    errCallback(error);
  }
};
