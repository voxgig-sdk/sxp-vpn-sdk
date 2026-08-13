# SxpVpn SDK utility: make_context

from sxpvpn_sdk.core.context import SxpVpnContext


def make_context_util(ctxmap, basectx):
    return SxpVpnContext(ctxmap, basectx)
