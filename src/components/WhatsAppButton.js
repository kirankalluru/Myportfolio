import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const openWhatsApp = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
        <button className='bg-green-500/100 p-3  w-2/12 rounded-md hover:bg-green-600/100' onClick={openWhatsApp}>
        <i class="fa-brands fa-whatsapp text-3xl"></i>
        </button>
        
        </>

    );
};

export default WhatsAppButton;
