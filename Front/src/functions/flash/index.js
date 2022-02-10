import { toast } from 'react-toastify';

export function flashError() {
  toast.error('Une erreur est survenue. Avez-vous rempli l\'ensemble des champs obligatoires', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export function flashSuccess() {
  toast.success('Votre message a été envoyé avec succès', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}
