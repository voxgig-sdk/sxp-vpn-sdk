# SxpVpn SDK configuration

module SxpVpnConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "SxpVpn",
        "slug" => "sxp-vpn",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://adminvpn.s-xprem.com/sxpVPN/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "server" => {},
        },
      },
      "entity" => {
        "server" => {
          "fields" => [
            {
              "name" => "country",
              "short" => "Country where the server is located",
              "type" => "`$STRING`",
            },
            {
              "name" => "host",
              "short" => "Server hostname or IP address",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the server",
              "type" => "`$STRING`",
            },
            {
              "name" => "load",
              "short" => "Server load percentage",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "name",
              "short" => "Server name or location",
              "type" => "`$STRING`",
            },
            {
              "name" => "port",
              "short" => "Connection port",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "protocol",
              "short" => "VPN protocol used",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Server status (active, inactive, maintenance)",
              "type" => "`$STRING`",
            },
          ],
          "name" => "server",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api1.php",
                  "parts" => [
                    "api1.php",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.servers`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    SxpVpnFeatures.make_feature(name)
  end
end
