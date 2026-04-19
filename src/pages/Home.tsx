import Container from "../components/Container";
import Section from "../components/Section";
import heroImage from "../assets/images/hero.png";
import whyUsHeroImage from "../assets/images/why-us-hero.svg";
import styles from "../styles/Home.module.css";
import useEmblaCarousel from "embla-carousel-react";

import clockIcon from "../assets/images/clock.png";
import magnifierIcon from "../assets/images/magnifier.png";
import shieldIcon from "../assets/images/shield.png";
import arrowLeftIcon from "../assets/images/arrow-left.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

function HomeCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		slidesToScroll: 1,
	});
	const goToPrev = () => emblaApi?.scrollPrev();
	const goToNext = () => emblaApi?.scrollNext();

	const slides = [
		{
			icon: clockIcon,
			text: "Высокая и оперативная скорость обработки заявки",
		},
		{
			icon: magnifierIcon,
			text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
		},
		{
			icon: shieldIcon,
			text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
		},
	];

	// to create illusion...
	slides.push(...slides);

	return (
		<div className={styles.carousel}>
			<div className={styles.carouselViewport} ref={emblaRef}>
				<div className={styles.carouselContainer}>
					{slides.map((slide, index) => (
						<div key={index} className={styles.carouselSlide}>
							<img
								src={slide.icon}
								alt=""
								className={styles.carouselSlideIcon}
							/>
							<p className={styles.carouselSlideText}>{slide.text}</p>
						</div>
					))}
				</div>
			</div>
			<button className={styles.carouselButtonPrev} onClick={goToPrev}>
				<img src={arrowLeftIcon} alt="arrow left" />
			</button>
			<button className={styles.carouselButtonNext} onClick={goToNext}>
				<img src={arrowRightIcon} alt="arrow right" />
			</button>
		</div>
	);
}

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
						<img src={heroImage} alt="" className={styles.heroImage} />
					</div>
				</Container>
			</Section>
			<Section className={styles.whyUs}>
				<Container>
					<h2 className={styles.whyUsTitle}>Почему именно мы</h2>
					<HomeCarousel />
					<img src={whyUsHeroImage} alt="" className={styles.whyUsImage} />
				</Container>
			</Section>
		</>
	);
}
