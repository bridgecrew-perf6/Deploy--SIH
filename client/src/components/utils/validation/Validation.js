export const isEmpty = value => {
    if(!value) return true
    return false
}

export const isEmail = email => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ;
    return re.test(email);
}

export const isLength_Phn = phone => {
    if(phone.length !==10) return true
    return false
}
export const isLength_Adh = adhar => {
    if(adhar.length !==12) return true
    return false
}

export const isLength_Pas = password => {
    if(password.length < 6) return true
    return false
}

export const isMatch = (password, cf_password) => {
    if(password === cf_password) return true
    return false
}
