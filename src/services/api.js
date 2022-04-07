import axios from "axios";

export const api = axios.create({
    baseURL:"https://ene92fijdf7w.x.pipedream.net"
});

export const joke = axios.create({
    baseURL:"https://api.chucknorris.io/jokes/random"
})