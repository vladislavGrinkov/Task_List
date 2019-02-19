var app = new Vue({
  el: "#app",
  data: {
    title: "Task List",
    items: [
      {text: ""}

    ]
  },
  methods:{
    addItem: function(){
      var input = document.getElementById("itemForm");
      
      if(input.value !== "" ){
        this.items.push({
          text: input.value
        })
        input.value = "";
      }
    },
    deleteItem: function(index){
      this.items.splice(index, 1);
    }
  }
})