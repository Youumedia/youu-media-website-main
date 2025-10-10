/**
 * Development Authentication Bypass
 * This helper provides a mock user session for testing backend pages
 * without needing to sign in during development
 */

export const DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === 'true'

export const DEV_USER = {
  id: 'dev-user-id-12345',
  email: 'dev@youumedia.com',
  user_metadata: {
    full_name: 'Dev User'
  },
  app_metadata: {},
  aud: 'authenticated',
  created_at: new Date().toISOString(),
}

/**
 * Check if we're in development mode
 */
export function isDevMode(): boolean {
  return DEV_MODE
}

/**
 * Get a mock development user
 */
export function getDevUser() {
  if (!DEV_MODE) {
    return null
  }
  return DEV_USER
}

/**
 * Console log helper for development mode
 */
export function devLog(message: string, data?: any) {
  if (DEV_MODE) {
    console.log(`[DEV MODE] ${message}`, data || '')
  }
}


