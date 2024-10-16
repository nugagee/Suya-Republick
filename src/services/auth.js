export const setAuth = (data) => {
  localStorage.setItem("authDetails", JSON.stringify(data));
};

export const getAuth = (type) => {
  let data = localStorage.getItem("authDetails");
  if (data == null  || data == "undefined") {
    return false;
  } else {
    data = JSON.parse(data);
    return type ? data?.access_token : data;
  }
};
export const setPartnerAuth = (data) => {
  localStorage.setItem("partnerAuthDetails", JSON.stringify(data));
};

export const getPartnerAuth = (type) => {
  let data = localStorage.getItem("partnerAuthDetails");
  if (data == null  || data == "undefined") {
    return false;
  } else {
    data = JSON.parse(data);
    return type ? data.access_token : data;
  }
};

export const setAuthWallet = (data) => {
  localStorage.setItem("walletDetails", JSON.stringify(data));
};

export const getAuthWallet = (type) => {
  let data = localStorage.getItem("walletDetails");
  if (data == null) {
    return false;
  } else {
    data = JSON.parse(data);
    return type ? data.access_token : data;
  }
};
export const setAuthPaybills = (data) => {
  localStorage.setItem("paybillsDetails", JSON.stringify(data));
};

export const getAuthPaybills = () => {
  let data = localStorage.getItem("paybillsDetails");
  if (data == null) {
    return false;
  } else {
    data = JSON.parse(data);
    return data.access_token;
  }
};

export const setUser = (data) => {
  localStorage.setItem("userDetails", JSON.stringify(data));
};

export const getUser = (type) => {
  let data = localStorage.getItem("userDetails");
  data = JSON.parse(data);
  return type ? data.email : data;
};

export const setUserWallet = (data) => {
  localStorage.setItem("walletUserDetails", JSON.stringify(data));
};
export const setUserCashbackWallet = (data) => {
  localStorage.setItem("cashbackWalletUserDetails", JSON.stringify(data));
};

export const getUserWallet = (type) => {
  let data = localStorage.getItem("walletUserDetails");
  data = JSON.parse(data);
  return type ? data.email : data;
};
export const getUserCashbackWallet = (type) => {
  let data = localStorage.getItem("cashbackWalletUserDetails");
  data = JSON.parse(data);
  return type ? data.email : data;
};
