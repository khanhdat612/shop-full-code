<?php
class  tinhtien
{
    public $ten;
    public $dinhmuc;
    public $dmtrong;
    public $dmngoai;
    public $chisocu;
    public $chisomoi;

    public function __autoload($tenchu, $dm, $dmin, $dmout, $cscu, $csmoi)
    {
        $this->ten = $tenchu;
        $this->dinhmuc = $dm;
        $this->dmtrong = $dmin;
        $this->dmngoai = $dmout;
        $this->chisocu = $cscu;
        $this->chisomoi = $csmoi;
    }
    public function tinhchisotieuthu($chisomoi, $chisocu)
    {
        $diennangdung = $chisomoi - $chisocu;
        return $diennangdung;
    }
}
