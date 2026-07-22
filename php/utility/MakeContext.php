<?php
declare(strict_types=1);

// SxpVpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SxpVpnMakeContext
{
    public static function call(array $ctxmap, ?SxpVpnContext $basectx): SxpVpnContext
    {
        return new SxpVpnContext($ctxmap, $basectx);
    }
}
