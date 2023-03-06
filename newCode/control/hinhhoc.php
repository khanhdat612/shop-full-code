<?php
class hinhhoc
{
    var $canh1;
    var $canh2;
    var $loai;
    public function __construct($c1, $c2)
    {
        $this->canh1 = $c1;
        $this->canh2 = $c2;
    }
    public function kiemtra()
    {
        $this->loai = ($this->canh1 == $this->canh2) ? 1 : 0;
        return $this->loai;
    }
    public function chuviphp()
    {
        $chuvi = ($this->loai == 1) ? $this->canh1 * 4 : ($this->canh1 + $this->canh2) * 2;
        return $chuvi;
    }
    public function dientichphp()
    {
        return $this->canh1 * $this->canh2;
    }
}
