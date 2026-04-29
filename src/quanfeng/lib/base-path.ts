const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(value: string) {
  if (!value || !basePath) {
    return value;
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("//") ||
    value.startsWith("#") ||
    value.startsWith("tel:") ||
    value.startsWith("mailto:") ||
    value.startsWith("javascript:")
  ) {
    return value;
  }

  if (value === "/") {
    return basePath;
  }

  if (value === basePath || value.startsWith(`${basePath}/`) || !value.startsWith("/")) {
    return value;
  }

  return `${basePath}${value}`;
}
