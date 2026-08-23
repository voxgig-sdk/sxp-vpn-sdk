<?php
declare(strict_types=1);

// SxpVpn SDK configuration

class SxpVpnConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SxpVpn",
                "slug" => "sxp-vpn",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://adminvpn.s-xprem.com/sxpVPN/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "server" => [],
                ],
            ],
            "entity" => [
        'server' => [
          'fields' => [
            [
              'name' => 'country',
              'short' => 'Country where the server is located',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'host',
              'short' => 'Server hostname or IP address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the server',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'load',
              'short' => 'Server load percentage',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'short' => 'Server name or location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'port',
              'short' => 'Connection port',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'protocol',
              'short' => 'VPN protocol used',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Server status (active, inactive, maintenance)',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'server',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api1.php',
                  'parts' => [
                    'api1.php',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.servers`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return SxpVpnFeatures::make_feature($name);
    }
}
