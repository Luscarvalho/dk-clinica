/// <reference types="vite/client" />

interface Window {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
}
