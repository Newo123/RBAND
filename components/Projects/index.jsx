import { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePagination } from '@/hooks/usePagination';

import { Container } from '../shared/Container';
import { Reference } from '../ui/Reference';

import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsItem } from './ProjectsItem';
import classes from './styles.module.scss';

const ProjectsArray = ({ projects_array, paginationRef }) => {
	return (
		<Swiper
			modules={[Pagination]}
			pagination={{
				clickable: true,
				el: '[data-slider-dots]',
				type: 'bullets',
				bulletClass: classes.ourProjects__tab,
				bulletActiveClass: classes.ourProjects__tab_active,
				renderBullet: function (index, className) {
					return `
          <div
							class="${classes.ourProjects__tab} ${index === 0 ? classes.ourProjects__tab_active : ''}"
						>
							<span>${projects_array[index].name}</span>
						</div>`;
				}
			}}
			onInit={swiper => {
				swiper.pagination.render();
			}}
			watchSlidesProgress={true}
			spaceBetween={100}
			allowTouchMove={false}
			className={classes.projectSlider}
		>
			{projects_array.length > 0 &&
				projects_array.map((projects, i) => (
					<SwiperSlide
						className={classes.ourProjects__grid}
						key={i}
					>
						{projects.children.length > 0 &&
							projects.children.map((item, index) => {
								const project = {
									href: item.href,
									image: item.feed_image,
									text: item.meta_description,
									title: item.name,
									textColor:
										item.classes === 'portfolio__item_text-white'
											? 'white'
											: '',
									video: item.video,
									target: item.target,
									placeholder: item.placeholder || ''
								};

								return (
									<ProjectsItem
										key={index}
										{...project}
									/>
								);
							})}
					</SwiperSlide>
				))}
		</Swiper>
	);
};
const ProjectsItems = ({ projects }) => {
	const { items } = usePagination(projects, 10);

	return (
		<div className={classes.ourProjects__grid}>
			{projects.length > 0 &&
				items.map((item, index) => {
					const project = {
						href: item.href,
						target: item.target || false,
						image: item.feed_image,
						text: item.meta_description,
						title: item.name,
						textColor:
							item.classes === 'portfolio__item_text-white' ? 'white' : '',
						video: item.video,
						target: item.target,
						placeholder: item.placeholder || ''
					};

					return (
						<ProjectsItem
							key={index}
							{...project}
						/>
					);
				})}
		</div>
	);
};

export function Projects({ projects, title, projects_array, more }) {
	const paginationRef = useRef(null);

	return (
		<section className={classes.ourProjects}>
			<Container
				variant='xl'
				className={classes.ourProjects__container}
			>
				{title && (
					<ProjectsHeader
						title={title}
						projects={projects_array}
						paginationRef={paginationRef}
						more={more}
					/>
				)}
				{projects_array ? (
					<ProjectsArray
						projects_array={projects_array}
						paginationRef={paginationRef}
					/>
				) : (
					<ProjectsItems projects={projects} />
				)}
				{more && (
					<Reference
						href={more.href}
						className={classes.ourProjects__moreMobile}
					>
						{more.text}
					</Reference>
				)}
			</Container>
		</section>
	);
}
