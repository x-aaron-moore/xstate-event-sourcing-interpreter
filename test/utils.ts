
/**
 * A template string tag function intended to make it easier
 * to create multi-line string literals indented with the code,
 * but to strip out unwanted indentation.
 *
 * Example:
 * ```
 * if (error) {
 *     console.log(unindent`
 *        Something went wrong, and there is a lot of
 *        verbose context to explain about it!
 *     `)
 * }
 * ```
 */
export function unindent(template: TemplateStringsArray) {
  if (template.length > 1) {
    throw new Error(unindent`
      The unindent tag does not support variable substitutions currently,
      it is only intended to be used for string literals.
    `)
  }
  const str = template[0]

  // The indentation is defined as a leading '\n' plus whatever whitespace follows.
  const [indent] = (str.match(/^\n[\s\t]+/) || [])

  if (indent) {
    const regexp = new RegExp(`${indent}`, 'g')
    return str.replace(regexp, '\n').trim()
  }
  return str.trim()
}