<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="keywords" content="">
    <meta name="description" content="ミライトデザインは顧客ニーズを生きた開発へとDesign(設計)する開発会社です">
    <meta name="author" content="miraito-inc.co.jp">
    <link rel="canonical" href="https://miraito-inc.co.jp">
    <link rel="stylesheet" type="text/css" href="css/default.css">
    <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
    <script src="js/application.js" type="text/javascript"></script>
    <title>株式会社ミライトデザイン</title>
</head>
<body>
    <div id="content">
        <div id="logo">
            <img src="images/logo.png" alt="会社ロゴ">
        </div>
        <div id="logo-word">
            <img src="images/logo-word.png" alt="会社ロゴテキスト">
        </div>
        <div id="mail">
            <img src="images/mail.png" alt="メール">
        </div>
    </div>
    <div id="overlay"></div>
    <div id="contact">
        <form id="contact-form" action="/index_submit" method="post" accept-charset="utf-8">

        <ul class="style-none">
            <li class="name">
                <label class="form-label" for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="your name" size="50">
            </li>
            <li class="email">
                <label class="form-label" for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="email address" size="50" rows="20">
            </li>
            <li class="msg">
                <label class="form-label" for="message">Message</label>
                <textarea id="message" name="message" cols="50" rows="20"></textarea>
            </li>
            <li><button id="send">send</button></li>
        </ul>
        </form>
    </div>


</body>
</html>