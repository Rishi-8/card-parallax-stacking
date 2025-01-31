import Card from './components/Card'
import { projects } from './data.js'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'

function App() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(scrollYProgress.current))
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  })

  return (
    <main className="main" ref={container}>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05)
          return <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * .25, 1]}
            targetScale={targetScale}
          />
        })
      }
    </main>
  );
}

export default App;
