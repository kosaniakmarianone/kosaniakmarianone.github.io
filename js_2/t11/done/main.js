const data =  {
  message: 'Hello Vue.js!',
  comments: [
    { 
      userName: "Rainer Brous",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda maiores odio dolorem, ratione iste possimus inventore esse soluta, autem obcaecati est impedit vel minus sit praesentium? Odit, nihil tempora."
    },
    { 
      userName: "Annie Leonhart",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda maiores odio dolorem, ratione iste possimus inventore esse soluta, autem obcaecati est impedit vel minus sit praesentium? Odit, nihil tempora."
    }
  ]
};

const CommentCommponent = {
  props: ['comment'],
  template: `
  <div class="card mb-3">
    <div class="row">
      <div class="col-1 userlogo_box">
          <div class="username">
              {{comment.userName.slice(0, 1)}}
          </div>
      </div>
      <div class="col-11">
          <h5>{{comment.userName}}</h5>
          <p>
             {{comment.text}} 
          </p>
      </div>
    </div>
  </div>
  `
};

const app = {
  data() {
    return data
  },
  methods: {
   
  },
  components: {
    CommentCommponent
  }
}

Vue.createApp(app).mount('#app');
