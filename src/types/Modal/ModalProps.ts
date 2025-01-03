export default interface ModalProps{
    title: string
    img: string
    show: boolean
    onClose: () => void
    onConfirm: () => void; // Callback para "Sim"
    onCancel: () => void;
}