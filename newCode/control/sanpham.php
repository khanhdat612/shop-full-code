<?php
class sanpham
{
    var $ma;
    var $ten;
    var $soluong;
    var $dongia;

    public function __construct($masp, $tensp, $soluongsp, $dongiasp)
    {

        $this->soluong = $soluongsp;
        $this->dongia = $dongiasp;
    }
    public function tongtien()
    {
        return $this->soluong * $this->dongia;
    }
}
