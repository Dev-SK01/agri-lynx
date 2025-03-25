import axios from "axios";
const instance = axios.create({
    baseURL:"https://enam.gov.in/web/Ajax_ctrl"
})


export default instance