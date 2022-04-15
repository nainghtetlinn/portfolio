import me from '../../assets/me.jpg'

const AboutLeft = () => {
  return (
    <div
      className="mx-auto w-60 overflow-hidden rounded-full sm:float-left sm:mr-4 sm:w-1/2 
          sm:rounded-none sm:[clip-path:var(--clip-path)] sm:[shape-outside:var(--clip-path)]"
    >
      <img src={me} alt="Naing Htet Linn" />
    </div>
  )
}

export default AboutLeft
