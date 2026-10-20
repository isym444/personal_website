// A lazy chunk can fail to load: the connection drops, the dev server restarts, or the visitor's tab predates the
// latest deploy so the chunk it asks for no longer exists. Retry once; callers fall back instead of crashing the page.
export async function loadChunk<T>(load: () => Promise<T>): Promise<T> {
  try {
    return await load()
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return load()
  }
}
