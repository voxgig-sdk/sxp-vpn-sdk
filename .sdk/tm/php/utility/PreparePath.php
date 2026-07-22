<?php
declare(strict_types=1);

// SxpVpn SDK utility: prepare_path

class SxpVpnPreparePath
{
    public static function call(SxpVpnContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
