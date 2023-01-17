interface HabitProps{
    completed: number
}

function Habit(props: HabitProps){
    return (
        <h1 className="bg-violet-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">{props.completed}</h1>
    );
}

export {
    Habit
}