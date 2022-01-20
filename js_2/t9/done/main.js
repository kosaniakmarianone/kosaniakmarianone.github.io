const test =  {
    message: 'Hello Vue.js!',
    kek: 2,
    lol: 10
  };
const EventHandling = {
    data() {
      return test
    },
    methods: {
      reverseMessage() {
        this.message = 3
      }
    }
  }

Vue.createApp(EventHandling).mount('#event-handling');
