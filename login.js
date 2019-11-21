var loginApp = new Vue({
    el: '#login',
    data: {
        username: '',
        password: '',
    },
    methods: {
        onSubmit: function () {
            var users = '';
            var newUser = this.username;
            var passcheck = this.password;

            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'))
            }

            if (users) {
                if (users.some(function (user) {
                    return user.username === newUser & user.password === passcheck
                })) {
                    window.location.href = 'userprofile.html' + '#' + newUser;
                } else {
                    alert('Incorrect credentials');
                }
            }
        }
    }
});
