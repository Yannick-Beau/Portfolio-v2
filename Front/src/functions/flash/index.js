import { toast } from 'react-toastify';

export function flashError() {
  toast.error("Une erreur est survenue lors de l'envois du message. Veillez ressayez ultérieurement ou passez directement par mon adresse email.", {
    position: "top-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}
export function flashSuccess() {
  toast.success("Votre message a été envoyé avec succès. Un avis de réception a été envoyé sur votre adresse email.", {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}
