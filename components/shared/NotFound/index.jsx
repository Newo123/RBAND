import Img from '/public/404.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';

import { Container } from '../Container';

import classes from './NotFound.module.scss';

export function NotFoundComponent() {
	const router = useRouter();

	return (
		<section className={classes.notFound}>
			<Container
				variant='xl'
				className={classes.notFound__container}
			>
				<div className={classes.notFound__content}>
					<div className={classes.notFound__img}>
						<Image
							src={Img}
							alt='Not Found!'
							sizes='100vw'
						/>
					</div>
					<h6 className={classes.notFound__title}>
						Сбился с пути? Вернись в начало!
					</h6>
					<p className={classes.notFound__text}>
						Вероятно, Вы указали несуществующий адрес, страница была удалена,
						перемещена или сейчас временно недоступна.
					</p>
					<Button className={classes.notFound__link}>
						<span onClick={() => router.back()}>На главную</span>
					</Button>
				</div>
			</Container>
		</section>
	);
}
