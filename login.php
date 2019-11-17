<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> 

    <title>StudyLink</title>
</head>
<body>
    <form id='form' >
        <select class="form-control form-control-lg" id='school'>
            <option>Надія</option>
            <option>інший заклад</option>
        </select>
        <div class="form-group">
            <label for="exampleInputEmail1">Назва групи</label>
            <input type="email" class="form-control" id="group" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">Назва групи співпадає з назвою групи у viber.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="button" onclick="formSubmit(school, group, password)" class="btn btn-primary">Увійти</button>
    </form>

    <script>
            function formSubmit(school, group, password){
                school = $('#school').val();
                group = $('#group').val();
                password = $('#password').val();
                var actionPage = 'http://kosaniakmarian.github.io/login.php?school='+school+'&group='+group+'&password='+password;
                window.location.assign(actionPage)
            }
    </script>
</body>
</html>