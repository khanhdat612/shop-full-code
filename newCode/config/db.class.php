<!-- <?php
class db
{
    protected static $connection;
    public function connect()
    {
        if (!isset(self::$connection)) {
            $config = parse_ini_file('config.ini');
            self::$connection =  new mysqli('localhost', $config['username'], $config['password'], $config['qlsp']);
        }
        if (self::$connection == false) {
            echo "false connection";
            return false;
        }
        return self::$connection;
    }
} -->
