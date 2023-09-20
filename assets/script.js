const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmails: [], 
    };
  },
  mounted() {
    //ciclo for 
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          //pusho per aggiungere la nuova email all'array
          this.randomEmails.push(response.data.response); 
        });
    }
  }
}).mount("#app");
