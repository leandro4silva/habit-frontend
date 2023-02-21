import * as Progress from '@radix-ui/react-progress';
import { useState, useEffect } from 'react';

interface ProgressBarProps{
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(props.progress), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root className='mt-4 relative overflow-hidden bg-zinc-700 rounded-xl w-full h-3'>
            <Progress.Indicator
                className='h-full w-full bg-violet-600 transition-[width] duration-300'
                style={{ width: `${0 + progress}%` }}
            />
        </Progress.Root>
    )
}