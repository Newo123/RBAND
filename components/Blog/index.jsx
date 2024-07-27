import { usePagination } from '@/hooks/usePagination';

import { Container } from '../shared/Container';

import classes from './Blog.module.scss';
import { BlogItem } from './BlogItem';

export function Blog({ blog }) {
	const { items } = usePagination(blog, 10);

	return (
		<section className={classes.blog}>
			<Container
				variant='xl'
				className={classes.blog__container}
			>
				<div className={classes.blog__grid}>
					{items.length > 0 &&
						items.map((blog, index) => (
							<BlogItem
								key={index}
								href={blog.href}
								image={blog.title_image}
								placeholder={blog.placeholder}
								title={blog.name}
							/>
						))}
				</div>
			</Container>
		</section>
	);
}
