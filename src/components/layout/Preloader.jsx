function Preloader({ isLoading }) {
  return (
    <div className={`preloader${isLoading ? '' : ' is-hidden'}`} aria-hidden="true">
      <div className="preloader-block">
        <div className="preloader-icon">
          <span className="loading-dot loading-dot-1" />
          <span className="loading-dot loading-dot-2" />
          <span className="loading-dot loading-dot-3" />
        </div>
      </div>
    </div>
  )
}

export default Preloader
