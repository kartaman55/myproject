Vue.use(VueLocalStorage);
new Vue({
    el: '#app',
    data(){
        return{
            search: '',
            todo:{
                topic: null,
            },
            todos: null || [],
        }
    },
    watch: {
        todos: function (val) {
            this.$ls.set('todos',val)
        }
    },
    mounted(){
        this.todo = this.$ls.get('todos', this.todos);
        var_this = this;
        this.$ls.on('todos', function (val){
            _this.todos = val;
        });
    },
    computed: {
        filteredList() {
            return this.todos.filter(todo => {
                return todo.topic.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
});