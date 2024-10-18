import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Revision Notes</h1>
			<button className={styles.option} id={styles.IB}>IB</button>
			<button className={styles.option} id={styles.GCSE}>GCSE</button>
		</div>
	);
}
