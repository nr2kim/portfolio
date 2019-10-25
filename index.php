<?php
    if(!empty($_POST['data'])) {
        $data = $_POST['data'];
        mail("noa9606@gmail.com", "Message from the Portfolio Website", $data);
    }
?>
