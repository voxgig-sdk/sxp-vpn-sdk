# SxpVpn SDK feature factory

from sxpvpn_sdk.feature.base_feature import SxpVpnBaseFeature
from sxpvpn_sdk.feature.test_feature import SxpVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SxpVpnBaseFeature(),
        "test": lambda: SxpVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
