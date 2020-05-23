var myDatabase = [{
        name: 'vmn',
        email: 'v@gmail.com',
        age: 22
    },
    {
        name: 'vmn1',
        email: 'v@gmail.com',
        age: 28
    },
    {
        name: 'vmn2',
        email: 'v@gmail.com',
        age: 21
    },
];

(function Avatars(db) {
    var init = function () {
        genrateList();
        enterUser();
    }

    var genrateList = function () {
        var parent = document.querySelector('#parent_avatars');
        var template = '';
        for (var i = 0; i < db.length; i++) {
            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i + '">X</div>';
            template += '<div class="card-body">';
            template += '<h3 class="card-title">' + db[i].name + '</h3>';
            template += '<p class="card-text"><strong>Email</strong>:<span>' + db[i].email + '</span></p>';
            template += '<p class="card-text"><strong>Age</strong>:<span>' + db[i].age + '</span></p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteCard();
    }

    var enterUser = function () {

        function grabUser() {

            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            var element = [name, email, age];
            // console.log(element);

            if (validateUser(element)) {
                // console.log('true');
                document.querySelector('#myForm').reset();
                db.push({
                    name: name,
                    email: email,
                    age: age
                })
                // console.log(db);
                genrateList();
            } else {
                // console.log('false')
                document.querySelector('#error').style.display = 'block';
                setTimeout(function () {
                    document.querySelector('#error').style.display = 'none';
                }, 2000)
            }
        }
        
        document.querySelector('#myForm').addEventListener("submit", function (event) {
            event.preventDefault();
            grabUser();
        })
    }

    var validateUser = function (element) {
        for (var i = 0; i < element.length; i++) {
            if (element[i] == "") {
                return false
            }
        }
        return true
    }

    var deleteCard = function () {
        var button = document.querySelectorAll('.card-delete');

        function deleteThis(element) {
            var obj = parseInt(element.getAttribute('data-card'));
            // console.log(obj);
            db.splice(obj, 1);
            genrateList();
        }

        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (e) {
                deleteThis(this);
            })
        }
    }
    init();
}(myDatabase))