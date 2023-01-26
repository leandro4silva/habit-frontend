import { Plus } from 'phosphor-react';

import logoImage from '../../assets/logo.svg';

export function Header(){
    return(
        <header className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt="Habits" />
          <button 
            type='button' 
            className='bg-none border border-violet-500 py-4 px-6 rounded-lg font-semibold flex gap-3 items-center hover:border-violet-300'
          >
            <Plus size="20" className="text-violet-500"/>
            Novo hábito
          </button>
        </header>
    )
}