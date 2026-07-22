<?php
declare(strict_types=1);

// SxpVpn SDK utility: prepare_body

class SxpVpnPrepareBody
{
    public static function call(SxpVpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
