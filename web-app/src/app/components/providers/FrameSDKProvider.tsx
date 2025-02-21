'use client'

import frameSDK, { type Context } from '@farcaster/frame-sdk'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type FrameContext = Context.FrameContext

interface FrameContextValue {
  context: FrameContext | undefined
  isLoaded: boolean
}

export const FrameSDKContext = createContext<FrameContextValue>({
  context: undefined,
  isLoaded: false,
})

export function FrameSDKProvider({ children }: { children: React.ReactNode }) {
  const [isFrameSDKLoaded, setIsFrameSDKLoaded] = useState(false)
  const [context, setContext] = useState<FrameContext>()

  useEffect(() => {
    const load = async () => {
      setContext(await frameSDK.context)
      frameSDK.actions.ready({})
    }
    if (frameSDK && !isFrameSDKLoaded) {
      setIsFrameSDKLoaded(true)
      load()
    }
  }, [isFrameSDKLoaded])

  return (
    <FrameSDKContext.Provider
      value={{
        context,
        isLoaded: isFrameSDKLoaded,
      }}
    >
      {children}
    </FrameSDKContext.Provider>
  )
}

export function useFrame() {
  const { context } = useContext(FrameSDKContext)
  const actions = frameSDK.actions

  const refetch = useCallback(() => {
    // Reload the page to refetch frame context
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }, [])

  return { context, actions, refetch }
}