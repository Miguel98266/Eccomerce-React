import axios from "axios";

const BaseURL='https://ecomerce-master.herokuapp.com';

export const ecomerceApi =axios.create({baseURL:BaseURL})