<?php
    // conect to database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test2";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $name = '';
    $phone = '';
    $email = '';
    $message = '';

    // post data submit to database
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["name"])) {
            $name = $_POST['name'];
        }
        if (isset($_POST["email"])) {
            $email = $_POST['email'];
        }
        if (isset($_POST["phone"])) {
            $phone = $_POST['phone'];
        }
        if (isset($_POST["message"])) {
            $message = $_POST['message'];
        }
        $sql = "INSERT INTO feedback (name, email, phone,message)
                            VALUES ('{$name}', '{$email}', '{$phone}', '{$message}')";

        if ($conn->query($sql) === true) {
            echo "Thêm dữ liệu thành công";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    //Đóng database
    $conn->close();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Internship Test 2</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">

        <form id="contact" action="" method="post">
            <h2>Software Internship Test 2</h2>
            <fieldset>
                <input class="input-form" name="name" placeholder="Full name" type="text" required autofocus>
            </fieldset>
            <fieldset>
                <input class="input-form" name="email" placeholder="Your Email Address" type="email" required>
            </fieldset>
            <fieldset>
                <input class="input-form" name="phone" placeholder="Your Phone Number " type="tel" required>
            </fieldset>
            <fieldset>
                <textarea class="input-form" name="message" placeholder="Type your message here...." required></textarea>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="contact-submit">Submit</button>
                <div class="clear-input-submit">
                    Clear
                </div>
            </fieldset>
        </form>
    </div>
    <script src="app.js"></script>
</body>

</html>
