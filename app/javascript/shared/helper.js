export const inputClasses  = (fieldName, state) => {
    let classes = "form-control";
    return state.errors[fieldName]
        ? `${classes} is-invalid`
        : classes;

}