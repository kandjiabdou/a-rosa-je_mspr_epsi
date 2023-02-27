import axios from 'axios';

export default {
    name:"MyDataApi",

    created() {
        axios.get('https://63f34dfbde3a0b242b3f57c3.mockapi.io/post')
            .then(response => {
                this.post = response.data;
                console.log(this.post);
            })
            .catch(error => {
                console.log(error);
            });
    },



}