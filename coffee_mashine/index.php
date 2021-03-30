<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Кофе машина</title>
     <style>body {
        overflow:hidden;
        background:url(img/background.jpg);
      }
      </style>
  </head>
  <body>
    <div class="container my-5">
      <div class="row">
        <div class="col-6 left">
          <div class="coffee-group my-3">
            <div class="coffee_item">
              <img onclick="getCoffee('Капучино',34);" class="rounded-circle" src="img/coffee.png">
              <span class="align-middle">Капучино - 34 руб.</span> 
            </div>
            <div class="coffee_item">
              <img onclick="getCoffee('Американо',39);" class="rounded-circle" src="img/coffee.png">
              <span class="align-middle">Американо - 39 руб.</span>
            </div>
            <div class="coffee_item">
              <img onclick="getCoffee('Латте',57);" class="rounded-circle" src="img/coffee.png">
              <span class="align-middle">Латте - 57 руб.</span>
            </div>
            <div class="coffee_item">
              <img onclick="getCoffee('Гляссе',61);" class="rounded-circle" src="img/coffee.png">
              <span class="align-middle">Гляссе - 61 руб.</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-6">
              <div id="display">
                <p id="info1"></p>
                <p id="info2">Внесите деньги</p>
                <div class="progress">
                  <div id="progress" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <button class="btn btn-primary" onclick="getChange(money.value)">Получить сдачу</button>
              <img id="coffee_cup" src="img/coffee.png">
            </div>
            <div class="col-6">
              <input id="money" type="hidden">
              <img id="bill_acc" src="img/bill_acc.png">
              <div id="change_tray"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="img/50rub.jpg" alt="50">
      <img src="img/100rub.jpg" alt="100">
      <img src="img/500rub.jpg" alt="500">
    </div>
    
    <script src="js/script.js"></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>