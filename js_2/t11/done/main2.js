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
    <div class="d-flex">
      <div class="userlogo_box">
          <div class="username">
              {{comment.userName.slice(0, 1)}}
          </div>
      </div>
      <div class="pl-3">
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
   getCommentsFormDB(){
    db.collection("comments").get().then( res => {
      this.comments = [];  //очишуємо коментарі при їх новому завантаженні
      res.forEach((doc) => {
            const comment = doc.data();
            comment.id = doc.id;
            this.comments.push(comment);
            console.log(comment)
        });
      console.log(this.comments)
    });
   }
  },
  components: {
    CommentCommponent
  },
  mounted() {
    // Витягуємо коментарі з бази данних при 1му завантаженні
    this.getCommentsFormDB()
  }
}

Vue.createApp(app).mount('#app');
