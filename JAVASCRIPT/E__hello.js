console.log("Hello")

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/"><img src="/img/logo.png"></a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/item1/">LONG<br>ITEM1</a></li>
        <li><a href="/item2/">LONG<br>ITEM 2</a></li>
        <li><a href="/item3/">LONG<br>ITEM 3</a></li>
        <li><a href="/item4/">LONG<br>ITEM 4</a></li>
        <li><a href="/item5/">LONG<br>ITEM 5</a></li>
      </ul>
    </div>
  </div>
</nav>

.navbar {
  min-height: 100px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 25px;
  margin-bottom: 0px;
  padding: 0px 70px;
}


.navbar-brand>img {
  height: 70px;
}

.navbar-brand {
  padding-top: 15px;
  padding-bottom: 15px;
}

.navbar-default {
    background: #5aa0d1;
    border-radius: 0;
    -webkit-box-shadow: none;
           -box-shadow: none;
    border: 0;
}

.navbar-default .navbar-brand {
  color: #fff14f;
}

.navbar-default .navbar-nav > li > a {
  color: #fff14f;
  line-height: 24px;
  padding-top: 28px;
}

.navbar-default .navbar-nav>li.active>a {
  color: #ffffff;
  background-color: transparent;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
  color: #ffffff;
  background-color: transparent;
}


.navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
  color: #ffffff;
}


// CHAT GPT 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="logo">Logo</div>
            <div class="menu-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <script src="script.js"></script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    margin: 0;
}

.navbar {
    background-color: #333;
    color: #fff;
    padding: 15px 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5em;
}

.menu-icon {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 3px 0;
}

.menu {
    list-style: none;
    padding: 0;
    display: flex;
}

.menu li {
    margin: 0 15px;
}

.menu a {
    text-decoration: none;
    color: #fff;
}

@media screen and (max-width: 768px) {
    .menu {
        display: none;
        flex-direction: column;
        text-align: center;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #333;
    }

    .menu.active {
        display: flex;
    }

    .menu-icon {
        display: flex;
    }
}

