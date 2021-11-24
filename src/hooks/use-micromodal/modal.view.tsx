import './modal.scss'
import { createPortal } from 'react-dom'

type Props = {
  id: string
}

export const Modal: React.FC<Props> = ({ children, id }) => {
  return createPortal(
    <div id={id} aria-hidden="true" className="wrap">
      <div className="overlay" tabIndex={-1} data-micromodal-close>
        <div role="dialog" className="dialog" aria-modal="true">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}