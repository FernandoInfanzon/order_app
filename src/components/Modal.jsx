import {useRef, forwardRef, useImperativeHandle} from 'react';
import {createPortal} from 'react-dom';

const Modal = forwardRef(({children}, ref) => {
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
        </dialog>, document.getElementById('modal-root')
     );
})
 
export default Modal;