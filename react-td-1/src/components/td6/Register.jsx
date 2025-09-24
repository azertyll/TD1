import { useLayoutEffect, useState } from 'react'
import Input from "./Input/Input";
import Modal from './Modal/Modal';

export default function Register() {

    const [formValues, setFormValues] = useState({});
    const [showModal, setShowModal] = useState(false);

    const fields = [
        {
            id: 1, type: 'radio', name: 'civilite', subFields: [
                { id: 'mister', label: 'M.', value: 'M' },
                { id: 'madam', label: 'Mme' },
                { id: 'miss', label: 'Mlle' },
            ]
        },
        { id: 2, type: 'text', name: 'lastName', label: 'Nom' },
        { id: 3, type: 'text', name: 'firstName', label: 'Prénom' },
        { id: 4, type: 'text', name: 'mail', label: 'E-mail' },
        { id: 5, type: 'date', name: 'birthDate', label: 'Date de naissance' },
        { id: 6, type: 'number', name: 'cp', label: 'Code Postal' },
        { id: 7, type: 'text', name: 'city', label: 'Ville' },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
        console.log(formValues)
    }

    const onInputChange = (name, value) => {
        setFormValues(prev => ({ ...prev, [name]: value }));
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <Input key={index} {...field} changeAction={(value) => { onInputChange(field.name, value) }} />
                ))}

                <button type='submit'>Envoyer</button>
            </form>
            <Modal status={showModal} onClose={closeModal} >
                <ul>
                    {Object.entries(formValues).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </Modal>

        </>
    );
}