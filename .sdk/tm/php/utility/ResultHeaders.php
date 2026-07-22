<?php
declare(strict_types=1);

// SxpVpn SDK utility: result_headers

class SxpVpnResultHeaders
{
    public static function call(SxpVpnContext $ctx): ?SxpVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
