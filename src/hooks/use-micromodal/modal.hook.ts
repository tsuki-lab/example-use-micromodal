import client from 'micromodal'
import { useEffect, useCallback, useState } from 'react'

export const useHook = (id: string) => {
  const [microModal, setMicroModal] = useState<typeof client | null>(null)

  useEffect(() => {
    setMicroModal(client)
    client.init({
      disableScroll: true
    })
  }, [])

  const open = useCallback(() => {
    if (!microModal) return
    microModal.show(id)
  }, [id, microModal])

  const close = useCallback(() => {
    if (!microModal) return
    microModal.close(id)
  }, [id, microModal])

  return { open, close }
}
