import sanitizeHtml from "sanitize-html";

export default function sanitizeInput(unsafeInput: string): string {
  return sanitizeHtml(unsafeInput, {
    allowedTags: [],
    allowedAttributes: {},
  });
}
