<?php
declare(strict_types=1);

// SxpVpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SxpVpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SxpVpnBaseFeature();
            case "test":
                return new SxpVpnTestFeature();
            default:
                return new SxpVpnBaseFeature();
        }
    }
}
