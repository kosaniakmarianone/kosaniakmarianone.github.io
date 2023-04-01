const data =  {
  message: 'Hello Vue.js!',
  comments: [],
  newComment: {
    userName: "Test user",
    text: "Text text"
  }
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
      });
   },

   addNewComment(){
      if(this.newComment.userName != "" && this.newComment.text != ""){
        db.collection("comments").add(this.newComment)
        .then( res => {
          console.log('new comment added!');
          this.newComment.userName = "";
          this.newComment.text = "";
          this.getCommentsFormDB();
        })
      }
   },
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
