function Overlay({ isActive }) {
  return <div id="overlay-effect" className={isActive ? '' : 'animate-up'} />
}

export default Overlay
