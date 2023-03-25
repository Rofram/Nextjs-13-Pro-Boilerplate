import { QueryProvider } from './QueryClient.context';

type AppProviderProps = {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>{children}</QueryProvider>
  )
}