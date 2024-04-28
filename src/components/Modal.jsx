import {useRef, forwardRef, useImperativeHandle} from 'react';
import {createPortal} from 'react-dom';

const Modal = forwardRef(({children, buttonCaption}, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    
    return createPortal( 
        <dialog ref={dialog} className='modal'>
            {children}
            <form method="dialog" className='mt-4 text-right'>
                <button>{buttonCaption}</button>
            </form> 
        </dialog>, document.getElementById('modal-root')
     );
})
 
export default Modal;