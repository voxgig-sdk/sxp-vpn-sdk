# SxpVpn SDK feature factory

from sxpvpn_sdk.feature.base_feature import SxpVpnBaseFeature
from sxpvpn_sdk.feature.ratelimit_feature import SxpVpnRatelimitFeature
from sxpvpn_sdk.feature.retry_feature import SxpVpnRetryFeature
from sxpvpn_sdk.feature.test_feature import SxpVpnTestFeature
from sxpvpn_sdk.feature.timeout_feature import SxpVpnTimeoutFeature


_FEATURES = {
    "base": lambda: SxpVpnBaseFeature(),
    "ratelimit": lambda: SxpVpnRatelimitFeature(),
    "retry": lambda: SxpVpnRetryFeature(),
    "test": lambda: SxpVpnTestFeature(),
    "timeout": lambda: SxpVpnTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
