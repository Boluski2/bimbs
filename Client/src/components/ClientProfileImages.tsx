import React from 'react'


const CLIENT_IMAGES = [
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHw4fHxodW1hbnxlbnwwfHx8fDE3NDEyNTgwNjF8MA&ixlib=rb-4.0.3&q=80&w=400',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyM3x8aHVtYW58ZW58MHx8fHwxNzQxMjU4MTkwfDA&ixlib=rb-4.0.3&q=80&w=400',
    'https://images.unsplash.com/photo-1569124589354-615739ae007b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyNnx8aHVtYW58ZW58MHx8fHwxNzQxMjU4MTkwfDA&ixlib=rb-4.0.3&q=80&w=400',
    'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyOXx8aHVtYW58ZW58MHx8fHwxNzQxMjU4MTkwfDA&ixlib=rb-4.0.3&q=80&w=400',
]



const ClientProfileImages = () => {
  return (
    <div className='flex -space-x-4'>
        {
            CLIENT_IMAGES.map((imageUrl, i) => (
            <img
            key={i} 
            src={imageUrl} 
            alt={`Client ${i + 1}`} 
            className='w-10 h-10 rounded-full border-2 border-white  object-cover'
            />
            ))
        }
      
    </div>
  )
}

export default ClientProfileImages
