import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { api } from '../../lib/axios';

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export function NewHabitForm() {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([]);

    async function createNewHabit(event: FormEvent){
        event.preventDefault();

        if(!title || weekDays.length == 0){
            return
        }

        await api.post('habits', {
            title,
            weekDays
        });

        setTitle('');
        setWeekDays([]);

        alert('Habito criado com sucesso!');
    }

    function handleToggleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemoveOne = weekDays.filter(day => day != weekDay);
            setWeekDays(weekDaysWithRemoveOne);
        }else{
            const weekDaysWithaddedOne = [...weekDays, weekDay];
            setWeekDays(weekDaysWithaddedOne);
        }
    }

    return (
        <form onSubmit={createNewHabit} action="" className='w-full flex flex-col mt-6'>
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>
            <input
                type="text"
                id="title"
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
                placeholder="ex.: Exercicios, dormir bem, etc..."
                onChange={(event) => {setTitle(event.target.value)}}
                value={title}   
                autoFocus
            />
            <label htmlFor="" className='font-semibold leading-tight mt-4'>
                Qual a recorrencia?
            </label>
            <div className='mt-3 flex flex-col gap-2'>
                {
                    availableWeekDays.map((weekDay, index) => {
                        return(
                            <Checkbox.Root 
                                key={index} 
                                className='flex items-center gap-3 group focus: outline-none'
                                onCheckedChange={() => handleToggleWeekDay(index)}
                                checked={weekDays.includes(index)}
                            >
                                <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900'>
                                    <Checkbox.Indicator>
                                        <Check size={20} className="text-white" />
                                    </Checkbox.Indicator>
                                </div>
                                <span className=' text-white leading-tight'>
                                    {weekDay}
                                </span>
                            </Checkbox.Root>
                        )
                    })
                }
            </div>

            <button type='submit' className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:ring-2 focus:outline-none focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'>
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    );
}