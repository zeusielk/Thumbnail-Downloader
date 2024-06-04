<?php
if (isset($_GET['url'])) {
    $url = $_GET['url'];
    echo $url;
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($ch);
    curl_close($ch);
    $filename = basename($url);
    header('Content-Type: image/jpg');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    echo $data;
} else {
    echo "No URL provided.";
}
?>
