/**
 * Utility for device fingerprinting and activation logic
 */

export async function getDeviceFingerprint(): Promise<string> {
  const fingerprintData = {
    userAgent: navigator.userAgent,
    screen: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  
  const dataString = JSON.stringify(fingerprintData);
  return await hashString(dataString);
}

export async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function generateLicenseToken(studentId: string, activationCode: string, fingerprint: string): Promise<string> {
  const combined = `${studentId}:${activationCode}:${fingerprint}`;
  return await hashString(combined);
}

export function getStoredLicense(): string | null {
  return localStorage.getItem('book_license');
}

export function saveLicense(token: string) {
  localStorage.setItem('book_license', token);
}

export function getStudentIdFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('student');
}
