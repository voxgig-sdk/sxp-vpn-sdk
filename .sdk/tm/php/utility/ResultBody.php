<?php
declare(strict_types=1);

// SxpVpn SDK utility: result_body

class SxpVpnResultBody
{
    public static function call(SxpVpnContext $ctx): ?SxpVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
