<?php 

$cat['mancare'] = ['mic dejun', 'aperitive', 'salate', 'pizza', 'burgeri', 'grill', 'desert'];
$cat['bauturi'] = ['alcolice', 'non-alcolice'];

if (isset($_POST['menu_cat'])) {

    $main_cat = $_POST['main_cat'];
    
    echo json_encode($cat[$main_cat]);

}