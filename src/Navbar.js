import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

function Navbar({color, start}) {
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 670px)").matches)

    useEffect(() => {
        window.matchMedia("(max-width: 670px)").addEventListener('change', e => setMatches(e.matches));
    }, []);


  return (
    <motion.div className='navbar' style={matches?{borderBottom:`1px solid ${color.nav}`}:{borderRight:`1px solid ${color.nav}`}}
        initial={{opacity:0}}
        animate={start&&{opacity:1}}
    >
        <section>
            <svg className='logo' viewBox="0 0 46 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 65.5085V41.2712M1 58.7966V34.5593M1 34.5593V7.33898L23 1V27.8475M1 34.5593L23 27.8475M1 34.5593L23 41.2712M23 27.8475L45 34.5593M23 27.8475V41.2712M45 34.5593L23 41.2712M45 34.5593V58.7966" stroke={color.nav} stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
        </section>

        <section>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='social'>
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke={color.nav} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke={color.nav} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke={color.nav} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='social'>
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke={color.nav} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='social'>
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke={color.nav} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </section>
    </motion.div>
  )
}

export default Navbar