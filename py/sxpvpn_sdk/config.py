# SxpVpn SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "SxpVpn",
            "slug": "sxp-vpn",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://adminvpn.s-xprem.com/sxpVPN/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "server": {},
            },
        },
        "entity": {
      "server": {
        "fields": [
          {
            "name": "country",
            "short": "Country where the server is located",
            "type": "`$STRING`",
          },
          {
            "name": "host",
            "short": "Server hostname or IP address",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the server",
            "type": "`$STRING`",
          },
          {
            "name": "load",
            "short": "Server load percentage",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "short": "Server name or location",
            "type": "`$STRING`",
          },
          {
            "name": "port",
            "short": "Connection port",
            "type": "`$INTEGER`",
          },
          {
            "name": "protocol",
            "short": "VPN protocol used",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Server status (active, inactive, maintenance)",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "server",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api1.php",
                "segments": [
                  {
                    "lit": "api1.php",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.servers`",
                },
                "parts": [
                  "api1.php",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
