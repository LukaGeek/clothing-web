import Image from "next/image";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Image src="/heroImg.jpg" alt="Main" width={1920} height={500} />
      <h6 className={classes.topic}>spring / summer collection 2017</h6>
      <h1 className={classes.text1}>Get up to 30%</h1>
      <h1 className={classes.text2}>New Arrivals</h1>
      <span className={classes.shop}>shop now</span>
    </div>
  );
}
