import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("template", null, [
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.count++))
    }, "Count is: " + _toDisplayString(_ctx.count), 1 /* TEXT */)
  ]))
}