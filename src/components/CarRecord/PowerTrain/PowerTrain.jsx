import { useSelector } from "react-redux"
import { Engine } from "./Engine/Engine";
import { Battery } from "./Battery/Battery";
import styles from './PowerTrain.module.scss';
import { Features } from "./Features/Features";

export const PowerTrain = () => {
  const { currentCar} = useSelector(store => store.car);
  const carEngine = Object.hasOwn(currentCar, 'engine');
  const carBatery = Object.hasOwn(currentCar, 'battery');
  const { engine, battery, features } = currentCar;

  return (
    <div className={styles['power-train']}>
      <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.1334 10H31.1334C30.5807 10 30.1334 10.4473 30.1334 11V12H28.1334V22H30.1334V23C30.1334 23.5527 30.5807 24 31.1334 24H33.1334C33.686 24 34.1334 23.5527 34.1334 23V11C34.1334 10.4473 33.686 10 33.1334 10Z" fill="#B2B5C1"/>
        <path d="M21.1333 2C21.6859 2 22.1333 1.55267 22.1333 1C22.1333 0.447333 21.6859 0 21.1333 0H8.99994C8.44727 0 7.99994 0.447333 7.99994 1C7.99994 1.55267 8.44727 2 8.99994 2H12.0666V4H8.99994C8.44727 4 7.99994 4.44733 7.99994 5C7.99994 5.336 7.99994 22.634 7.99994 21.9993H8.58594L12.3599 25.7073C12.5473 25.8947 12.8013 26 13.0673 26H22.1339C22.1339 24.9927 22.1339 5.65067 22.1339 5C22.1339 4.44733 21.6866 4 21.1339 4H18.0673V2H21.1333ZM17.8986 14.5547L15.8986 17.5547C15.5973 18.0073 14.9793 18.142 14.5119 17.832C14.0519 17.5253 13.9279 16.9053 14.2346 16.4453L15.1986 15H13.0666C12.6973 15 12.3586 14.7967 12.1846 14.4713C12.0106 14.146 12.0299 13.7513 12.2346 13.4453L14.2346 10.4453C14.5379 9.98533 15.1586 9.86133 15.6213 10.168C16.0813 10.4747 16.2053 11.0947 15.8986 11.5547L14.9346 13H17.0666C17.4359 13 17.7746 13.2033 17.9486 13.5287C18.1226 13.8533 18.1026 14.248 17.8986 14.5547Z" fill="#B2B5C1"/>
        <path d="M1 22C1.55267 22 2 21.5527 2 21V18H4V21C4 21.5527 4.44733 22 5 22H6V8H5C4.44733 8 4 8.44733 4 9V12H2V9C2 8.44733 1.55267 8 1 8C0.447333 8 0 8.44733 0 9V21C0 21.5527 0.447333 22 1 22Z" fill="#B2B5C1"/>
        <path d="M26.1333 25V9C26.1333 8.44733 25.686 8 25.1333 8H24.1333V26H25.1333C25.686 26 26.1333 25.5527 26.1333 25Z" fill="#B2B5C1"/>
      </svg>

      { carEngine ?  (
        <Engine engine={engine} />
      ) : (
        carBatery && (
          <Battery battery={battery}/>
      ))}
      <Features features={features} />
    </div>
  )
}