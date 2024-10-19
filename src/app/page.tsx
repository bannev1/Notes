import styles from "./page.module.css";
import SideNav from "@/components/SideNav/SideNav";

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Revision Notes</h1>
			<SideNav/>
			<h3 id={styles.pageCredit}>Written and Developed by <a data-content="Valentina Banner" href="https://realhuman101.github.com">Valentina Banner</a></h3>
			<p>Use the side navigation menu to navigate through the notes</p>
		</div>
	);
}
