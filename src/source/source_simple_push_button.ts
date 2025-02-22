import { z } from "zod"
import {
  source_component_base,
  type SourceComponentBase,
} from "src/source/base/source_component_base"
import { expectTypesMatch } from "src/utils/expect-types-match"

export const source_simple_push_button = source_component_base.extend({
  ftype: z.literal("simple_push_button"),
})

export type SourceSimplePushButtonInput = z.input<
  typeof source_simple_push_button
>
type InferredSourceSimplePushButton = z.infer<typeof source_simple_push_button>

/**
 * Defines a simple push button component
 */
export interface SourceSimplePushButton extends SourceComponentBase {
  ftype: "simple_push_button"
}

expectTypesMatch<SourceSimplePushButton, InferredSourceSimplePushButton>(true)
