import RedDot from '@/assets/icons/red-dot.svg';

export default function Status({status}: {status: string|null})  {
    return (
        <>
            {status === 'Dead' ? <span className='status status_red' /> : null}
            {status === 'Alive' ? <span className='status status_green' /> : null}
        </>
    )
}