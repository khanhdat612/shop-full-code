<?php
require_once('./config/db.class.php');
class product
{
    public $productid;
    public $productname;
    public $cateid;
    public $quantity;
    public $description;
    public $picture;
    public function __construct($pid, $pname, $pcate, $pquan, $pdes, $ppic)
    {
        $this->productid = $pid;
        $this->productname = $pname;
        $this->cateid = $pcate;
        $this->quantity = $pquan;
        $this->description = $pdes;
        $this->picture = $ppic;
    }
    public static function select_all_product()
    {
        $dbconnect = new db();
        $select = "select * from product";
        $prod = $dbconnect->connect();

        if ($prod != false) {
            $kq = $prod->query($select);
            return $kq;
        } else {
            return false;
        }
    }
}
