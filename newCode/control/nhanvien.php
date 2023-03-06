<?php
class  nhanvien
{
    public $manv;
    public $tennv;
    public $avatar;
    public $ngayvaolam;
    public $luongcoban;
    public $luongthang;
    public $songaylam;
    public $songayphep;
    public function __autoload($ma, $ten, $avt, $ngayvao, $luong)
    {
        $this->manv = $ma;
        $this->tennv = $ten;
        $this->avatar = $avt;
        $this->ngayvaolam = $ngayvao;
        $this->luongcoban = $luong;
    }
    public function tinhluongthang($songaylam, $songayphep)
    {
        $ngaykluong = ($songayphep > 2) ? $songayphep - 2 : 0;
        return $this->luongcoban * ($songaylam - $ngaykluong);
    }
}
