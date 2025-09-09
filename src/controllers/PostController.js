export const CreatePost = (req, res) => {
	res.send("Post created");
};

export const GetAllPosts = (req, res) => {
	res.send("List of posts");
};

export const GetPostById = (req, res) => {
	const { id } = req.params;
	res.send(`Post with ID: ${id}`);
};

export const UpdatePost = (req, res) => {
	const { id } = req.params;
	res.send(`Post with ID: ${id} updated`);
};

export const DeletePost = (req, res) => {
	const { id } = req.params;
	res.send(`Post with ID: ${id} deleted`);
};
