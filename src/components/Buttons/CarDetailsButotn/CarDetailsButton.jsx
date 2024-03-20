import styles from './CarDetailsButton.module.scss';

export const CarDetailsButton = (props) => {
  const { value, setShow, show } = props;

return (
  <button className={styles['car-details-button']} onClick={() => setShow(!show)}>
    {value}
    <svg xmlns="http://www.w3.org/2000/svg" width="206" height="24" viewBox="0 0 206 24" fill="none">
      <path d="M205.594 12.5941L200.434 17.7538C200.106 18.0821 199.574 18.0821 199.246 17.7538C198.918 17.4258 198.918 16.8936 199.246 16.5656L203.812 12L199.246 7.43467C198.918 7.10641 198.918 6.57445 199.246 6.24619C199.574 5.91794 200.106 5.91794 200.434 6.24619L205.594 11.4059C205.759 11.57 205.84 11.7849 205.84 12C205.84 12.2151 205.758 12.4302 205.594 12.5941Z" fill="#4A7FE0"/>
    </svg>
  </button>
  )
}
