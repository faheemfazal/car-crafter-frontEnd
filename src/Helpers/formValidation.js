/* eslint-disable no-unused-expressions */

export const FormValidate = (formData) => {
    const newErrors = {};
    const keys = Object.keys(formData)
    keys.map(key => {
        if (!formData.name) {
            newErrors.nameError = " Name is required";
        }
        if (!formData.email) {
            newErrors.emailError = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.emailError = "Email is invalid";
        }
     if (!formData.password) {
            newErrors.passwordError = "Password is required";
        }
    })
    return newErrors;
}

export const validatePhone = (phone) => {
    const newErrors = {};
    const keys = Object.keys(phone)
    keys.map(key => {
    if (!phone) newErrors[key] = `${key} is required`;       
    else if (key === 'number') {
        !/^\d{10}$/.test(phone.number) ? newErrors[key] = 'Mobile Number is invalid' : ''
    }
    console.log(newErrors);
})
    return newErrors;
}