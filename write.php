<?php
    if(isset($_POST['thrown_num'])){
        $text_file = fopen("obs_text/ThrowNo.txt", "w+");
        fwrite($text_file, $_POST['thrown_num']);
        fclose($text_file);
    }
?>