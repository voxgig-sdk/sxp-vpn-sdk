<?php
declare(strict_types=1);

// Typed models for the SxpVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Server entity data model. */
class Server
{
    public ?string $country = null;
    public ?string $host = null;
    public ?string $id = null;
    public ?float $load = null;
    public ?string $name = null;
    public ?int $port = null;
    public ?string $protocol = null;
    public ?string $status = null;
}

/** Request payload for Server#list. */
class ServerListMatch
{
    public ?string $country = null;
    public ?string $host = null;
    public ?string $id = null;
    public ?float $load = null;
    public ?string $name = null;
    public ?int $port = null;
    public ?string $protocol = null;
    public ?string $status = null;
}

