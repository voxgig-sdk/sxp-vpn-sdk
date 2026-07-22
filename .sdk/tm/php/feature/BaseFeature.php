<?php
declare(strict_types=1);

// SxpVpn SDK base feature

class SxpVpnBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SxpVpnContext $ctx, array $options): void {}
    public function PostConstruct(SxpVpnContext $ctx): void {}
    public function PostConstructEntity(SxpVpnContext $ctx): void {}
    public function SetData(SxpVpnContext $ctx): void {}
    public function GetData(SxpVpnContext $ctx): void {}
    public function GetMatch(SxpVpnContext $ctx): void {}
    public function SetMatch(SxpVpnContext $ctx): void {}
    public function PrePoint(SxpVpnContext $ctx): void {}
    public function PreSpec(SxpVpnContext $ctx): void {}
    public function PreRequest(SxpVpnContext $ctx): void {}
    public function PreResponse(SxpVpnContext $ctx): void {}
    public function PreResult(SxpVpnContext $ctx): void {}
    public function PreDone(SxpVpnContext $ctx): void {}
    public function PreUnexpected(SxpVpnContext $ctx): void {}
}
