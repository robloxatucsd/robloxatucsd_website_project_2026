export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2026-07-17'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_API_DATASET,
  'Missing environment variable: SANITY_STUDIO_API_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_API_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_API_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}