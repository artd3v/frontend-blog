import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';


import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.auth.data);
	const { posts, tags } = useSelector(state => state.posts)

	const isPostsLoading = posts.status === 'loading';
	const isTagsLoading = tags.status === 'loading';

	React.useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchTags());
	}, []);

	return (
		<>
			<Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
				<Tab label="Все" />
				<Tab label="cat1" />
				<Tab label="cat2" />
				<Tab label="cat3" />
				<Tab label="cat4" />
				<Tab label="cat5" />
			</Tabs>




			<Grid container spacing={2}>
				<Grid xs={3} item>
					<TagsBlock items={tags.items} isLoading={isTagsLoading} />
				</Grid>
				<Grid xs={9} item>
					{(isPostsLoading ? [ ...Array(5)] : posts.items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post
								_id={obj._id}
								title={obj.title}
								imageUrl={ obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : '' }
								user={obj.user}
								createdAt={obj.createdAt}
								viewsCount={obj.viewsCount}
								commentsCount={3}
								tags={obj.tags}
								isEditable={userData?._id === obj.user._id}
							/>
						),
					)}
				</Grid>
				
			</Grid>
			

		</>
	);
};
