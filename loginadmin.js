var adminloginApp = new Vue({
    el: '#adminlogin',
    data: {
        usernameadmin: '',
        passwordadmin: '',
    },
    methods: {
        onSubmit: function () {
            var admins = '';
            var newUser = this.usernameadmin;
            var passcheck = this.passwordadmin;

            if (localStorage.getItem('admin')) { // 'users' is an array of objects
                admin = JSON.parse(localStorage.getItem('admin'))
            }

            if (admin) {
                if (admin.some(function (user) {
                    return user.usernameadmin === "admin" & user.passwordadmin === passcheck
                })) {
                    window.location.href = 'adminprofile.html' + '#' + newUser;
                } else {
                    alert('Incorrect credentials');
                }
            }
        }
    }
});
