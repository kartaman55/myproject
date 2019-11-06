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
                    window.location.href = 'userprofile.html' + '#' + newUser
                } else {
                    alert('Incorrect credentials');
                }
            }
        }
    }
});

var loginadmin = new Vue({
    el: '#loginadmin',
    data: {
        usernameadmin: '',
        passwordadmin: '',
    },
    methods: {
        onSubmit: function () {
            var admin = '';
            var newUser = this.usernameadmin;
            var passcheck = this.passwordadmin;

            if (localStorage.getItem('admin')) { // 'users' is an array of objects
                admin = JSON.parse(localStorage.getItem('admin'))
            }

            if (admin) {
                if (admin.some(function (user) {
                    return user.usernameadmin === newUser & user.passwordadmin === passcheck
                })) {
                    window.location.href = 'userprofile.html' + '#' + newUser

                } else {
                    alert('Incorrect credentials');
                }
            }
        }
    }
});

