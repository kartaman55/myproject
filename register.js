var signupApp = new Vue({
    el: '#signup',
    data: {
        email: '',
        username: '',
        password: '',
    },
    methods: {
        onSubmit: function () {
// check if the email already exists
            var users = '';
            var newUser = this.username;
            var newEmail = this.email;
            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'));
            }

                if (users.some(function (user) {
                    return user.email === newEmail
                })) {
                    alert('Email already exists!');
                    return;
                }

            if (users) {
                if (users.some(function (user) {
                    return user.username === newUser
                })) {
                    alert('Username already exists!');
                    return;
                }

                users.push({'email': newEmail, 'username': newUser, 'password': this.password});
                localStorage.setItem('users', JSON.stringify(users));
                alert("You have registered! Press OK to go to the Login Page.");
                window.location.href = 'login.html';
            } else {
                users = [{'email': newEmail, 'username': newUser, 'password': this.password}];
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }
});