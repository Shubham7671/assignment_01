export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users-data")) || [];
}

export const setDataToLocalStorage = (data) => {
    let existingData = getDataFromLocalStorage();
    // if (!existingData) {
    //     existingData = [];
    // }
    localStorage.setItem("users-data", JSON.stringify([...existingData, data]));
}