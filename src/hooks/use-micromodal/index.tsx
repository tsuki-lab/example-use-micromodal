import { useHook } from './modal.hook'
import { Modal as ModalComponent } from './modal.view'
import { useCallback } from 'react'

export type UseMicromodal = (id: string) => {
  Modal: React.FC<{ children: React.ReactNode }>
  open: () => void
  close: () => void
}

export const useMicromodal: UseMicromodal = (id: string) => {
  const { open, close } = useHook(id)

  const Modal = useCallback(
    ({ children }) => {
      return <ModalComponent id={id}>{children}</ModalComponent>
    },
    [id]
  )

  return {
    Modal,
    open,
    close
  }
}
