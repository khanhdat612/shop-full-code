<?php
require_once('./config/db.class.php');
class phongban
{
    private $dbconnect;
    public function __construct()
    {
    }
    public function dsphong()
    {
        try {
            $dbconnect = new db();
            $select = "select * from phongban";
            $stmt = $dbconnect->getDB_PDO()->prepare($select);
            $kq = $stmt->execute();
            $arr = $stmt->fetchAll();
            return $arr;
        } catch (PDOException $e) {
            return array();
        }
    }
    public function them_phong($ten, $viettat, $ghichu)
    {
        try {
            $dbconnect = new db();
            $sql = "insert into phongban (tenphong,viettat,ghichu) values (:tenphong,:viettat,:ghichu)";
            $stmt = $dbconnect->getDB_PDO()->prepare($sql);
            $stmt->bindparam(":tenphong", $ten);
            $stmt->bindparam(":viettat", $viettat);
            $stmt->bindparam(":ghichu", $ghichu);
            $kq = $stmt->execute();
            $dbconnect = null;
            return $kq;
        } catch (PDOException $e) {
            return array();
        }
    }
}
