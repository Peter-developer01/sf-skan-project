import Container from "../components/Container";
import Section from "../components/Section";
import heroImage from "../assets/images/hero.png";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Section className={styles.hero}>
				<Container className={styles.heroContainer}>
					<div>
						<h1 className={styles.heroTitle}>
							Сервис по поиску <br /> публикаций <br /> о компании <br /> по его
							ИНН
						</h1>
						<p className={styles.heroDescription}>
							Комплексный анализ публикаций, получение данных в формате PDF на
							электронную почту.
						</p>
						<a href="#" className={styles.heroRequestLink}>
							Запросить данные
						</a>
					</div>
					<div>
						<img src={heroImage} alt="hero" className={styles.heroImage} />
					</div>
				</Container>
			</Section>
		</>
	);
}
