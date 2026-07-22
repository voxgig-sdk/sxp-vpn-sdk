-- Typed models for the SxpVpn SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Server
---@field country? string
---@field host? string
---@field id? string
---@field load? number
---@field name? string
---@field port? number
---@field protocol? string
---@field status? string

---@class ServerListMatch
---@field country? string
---@field host? string
---@field id? string
---@field load? number
---@field name? string
---@field port? number
---@field protocol? string
---@field status? string

local M = {}

return M
