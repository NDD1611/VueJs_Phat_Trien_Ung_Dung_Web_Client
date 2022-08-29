import axios from "../axios.js"

export const getDataContactList = async () => {
    let res = await axios.get("/api/contacts")
    return res.data;
}

export const updateContact = async (contact) => {
    try {
        let res = await axios.put(`/api/contacts/${contact._id}`, contact)
        return res.data
    } catch (err) {
        return {
            errCode: 3,
            mes: "Update failed!"
        }
    }
}
export const deleteAllContact = async () => {
    try {
        let res = await axios.delete("/api/contacts")
        return res;
    } catch (err) {
    }
}

export const createNewContactService = async (contact) => {
    try {
        let res = await axios.post("/api/contacts", contact)
        return res.data;
    } catch (err) {
        console.log("Error, CRUD")
    }
}
