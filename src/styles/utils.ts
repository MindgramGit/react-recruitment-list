import entries from "lodash/entries"
import isNumber from "lodash/isNumber"
import isObject from "lodash/isObject"
import omit from "lodash/omit"
import { Device, isMobile } from "../hooks/common/useDevice"


type Values = {
    mobile: number
    desktop: number
}

export const createValueByDevice = (v: Values) => (device: Device) =>
    isMobile(device) ? `${v.mobile}px` : `${v.desktop}px`

export type CSSValue = string | number

export const parseCSSValue = (value?: CSSValue) => (isNumber(value) ? `${value}px` : value)

export type Space =
    | CSSValue
    | {
          x: CSSValue
          y: CSSValue
      }
    | {
          x: CSSValue
          top?: CSSValue
          bottom?: CSSValue
      }
    | {
          y: CSSValue
          left?: CSSValue
          right?: CSSValue
      }
    | {
          top?: CSSValue
          bottom?: CSSValue
          left?: CSSValue
          right?: CSSValue
      }

export const getSpaceWithDirections = (prefix: "margin" | "padding" | "offset") => (value: Space) => {
    if (isObject(value)) {
        let toMap = omit(value, ["x", "y"])
        if ("x" in value) {
            toMap = { ...toMap, left: value.x, right: value.x }
        }
        if ("y" in value) {
            toMap = { ...toMap, top: value.y, bottom: value.y }
        }
        return entries(toMap).map(([k, v]) => `${prefix === "offset" ? "" : `${prefix}-`}${k}: ${parseCSSValue(v)};`)
    }

    return `${prefix}: ${parseCSSValue(value)}`
}

